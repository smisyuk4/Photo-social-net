import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectStateUserId } from '../../../redux/selectors';
import { db, myStorage } from '../../../firebase/config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, setDoc, Timestamp } from 'firebase/firestore';
import {
  View,
  Image,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Linking,
} from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { MaterialIcons, Feather, AntDesign } from '@expo/vector-icons';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LoaderScreen } from '../../Screens/LoaderScreen';
import { ModalWrp } from '../ModalWrp';
import { styles } from './CreatePosts.styled';

const INITIAL_POST = {
  photoUri: '',
  titlePost: '',
  location: {},
};

export const CreatePosts = ({ navigation }) => {
  const cameraRef = useRef();
  const [type, setType] = useState(CameraType.back);
  const [permissionCam, requestPermissionCam] = Camera.useCameraPermissions();
  const [permissionLoc, requestPermissionLoc] =
    Location.useForegroundPermissions();
  const [state, setState] = useState(INITIAL_POST);
  const userId = useSelector(selectStateUserId);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isActiveInput, setIsActiveInput] = useState({
    title: false,
    location: false,
  });
  const [styleSendBtn, setStyleSendBtn] = useState({});
  const [styleRemoveBtn, setStyleRemoveBtn] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await Camera.requestCameraPermissionsAsync();
        await MediaLibrary.requestPermissionsAsync();
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  useEffect(() => {
    if (state.photoUri && !isShowKeyboard) {
      setStyleSendBtn({
        ...styles.buttonForm,
        ...styles.activeButtonForm,
      });

      setStyleRemoveBtn({
        ...styles.removeBtn,
        ...styles.activeRemoveBtn,
      });

      return;
    }

    if (state.photoUri && isShowKeyboard) {
      setStyleSendBtn({
        ...styles.buttonForm,
        ...styles.activeButtonForm,
        ...styles.changedButtonForm,
      });

      setStyleRemoveBtn({
        ...styles.removeBtn,
        ...styles.activeRemoveBtn,
        ...styles.changedRemoveBtn,
      });

      return;
    }

    if (!state.photoUri && !isShowKeyboard) {
      setStyleSendBtn({
        ...styles.buttonForm,
      });

      setStyleRemoveBtn({
        ...styles.removeBtn,
      });

      return;
    }

    if (!state.photoUri && isShowKeyboard) {
      setStyleSendBtn({
        ...styles.buttonForm,
        ...styles.changedButtonForm,
      });

      setStyleRemoveBtn({
        ...styles.removeBtn,
        ...styles.changedRemoveBtn,
      });

      return;
    }
  }, [state, isShowKeyboard]);

  if (!permissionCam) {
    return <LoaderScreen />;
  }

  if (!permissionCam.granted) {
    return (
      <View style={styles.permission}>
        <Text style={{ textAlign: 'center' }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermissionCam} title="grant permission" />
      </View>
    );
  }

  const toggleCameraType = () => {
    console.log('flip camera');
    setType(current =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const getLocation = async () => {
    if (!permissionLoc.granted) {
      return (
        <View style={styles.permission}>
          <Text style={{ textAlign: 'center' }}>
            We need your permission to location
          </Text>
          <Button onPress={requestPermissionLoc} title="grant permission" />
        </View>
      );
    }

    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({});

    const [postAddress] = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });

    setState(prev => ({
      ...prev,
      location: { latitude, longitude, postAddress },
    }));
  };

  const takePhoto = async () => {
    console.log('takePhoto - permissionLoc.granted', permissionLoc.granted);

    if (cameraRef) {
      try {
        const { uri } = await cameraRef.current.takePictureAsync();
        await getLocation();

        setState(prev => ({
          ...prev,
          photoUri: uri,
        }));
      } catch (error) {
        console.log('takePhoto ===>>> ', error.message);
      }
    }
  };

  const pickImage = async () => {
    console.log('pickImage - permissionLoc.granted', permissionLoc.granted);

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        await getLocation();
        setState(prev => ({
          ...prev,
          photoUri: result.assets[0].uri,
        }));
      }
    } catch (error) {
      console.log('pickImage ====>> ', error.message);
    }
  };

  const getCustomLocation = async () => {
    setModalVisible(true);
  };

  const draggableMarker = async ({ latitude, longitude }) => {
    const [postAddress] = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });

    setState(prev => ({
      ...prev,
      location: { latitude, longitude, postAddress },
    }));
  };

  const hideKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleInputFocus = textInput => {
    setIsActiveInput({
      [textInput]: true,
    });
  };

  const handleInputBlur = textInput => {
    setIsActiveInput({
      [textInput]: false,
    });
  };

  const uploadPhotoToServer = async () => {
    const uniquePostId = Date.now().toString();

    try {
      const response = await fetch(state.photoUri);

      const file = await response.blob();

      const imageRef = await ref(myStorage, `postImages/${uniquePostId}`);

      await uploadBytes(imageRef, file);

      return await getDownloadURL(imageRef);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadPostToServer = async () => {
    const uniquePostId = Date.now().toString();

    try {
      const photo = await uploadPhotoToServer();
      const postRef = doc(db, 'posts', uniquePostId);

      await setDoc(postRef, {
        photo,
        userId,
        titlePost: state.titlePost ? state.titlePost : 'Незабутня подія',
        location: state.location ? state.location : {},
        createdAt: Timestamp.fromDate(new Date()),
        updatedAt: Timestamp.fromDate(new Date()),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const publishPost = async () => {
    hideKeyboard();

    try {
      await uploadPostToServer();
    } catch (error) {
      console.log('publishPost ====>>>', error.message);
    }

    setState(INITIAL_POST);

    navigation.navigate('PostsScreen', { screen: 'Posts' });
  };

  return (
    <TouchableWithoutFeedback onPress={() => hideKeyboard()}>
      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* main content */}
        <View style={styles.container}>
          <View style={styles.cameraWrp}>
            <Camera
              style={
                isShowKeyboard
                  ? { ...styles.camera, height: hp('22%') }
                  : { ...styles.camera }
              }
              type={type}
              ref={cameraRef}
            >
              <TouchableOpacity
                style={styles.buttonCapture}
                onPress={takePhoto}
              >
                <MaterialIcons name="photo-camera" size={24} color="white" />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonToggle}
                onPress={toggleCameraType}
              >
                <Feather name="repeat" size={24} color="white" />
              </TouchableOpacity>

              {state.photoUri !== '' && (
                <View style={styles.takePhotoContainer}>
                  <Image
                    source={{ uri: state.photoUri }}
                    style={
                      isShowKeyboard
                        ? { ...styles.photo, height: hp('22%') }
                        : { ...styles.photo }
                    }
                    resizeMode="contain"
                  />
                </View>
              )}
            </Camera>
          </View>

          {state.photoUri !== '' ? (
            <TouchableOpacity
              onPress={() => setState(prev => ({ ...prev, photoUri: '' }))}
            >
              <Text style={styles.buttonGalleryText}>Редагувати фото</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={pickImage}>
              <Text style={styles.buttonGalleryText}>Завантажити фото</Text>
            </TouchableOpacity>
          )}

          <View
            style={{
              paddingVertical: isShowKeyboard ? hp('0.96%') : hp('3.8%'),
              gap: isShowKeyboard ? hp('0.48%') : hp('1.92%'),
            }}
          >
            <TextInput
              style={{
                ...styles.input,
                borderBottomColor: isActiveInput.title ? '#FF6C00' : '#E8E8E8',
              }}
              value={state.titlePost}
              onChangeText={value =>
                setState(prev => ({ ...prev, titlePost: value }))
              }
              onFocus={() => {
                setIsShowKeyboard(true);
                handleInputFocus('title');
              }}
              onBlur={() => handleInputBlur('title')}
              inputMode="text"
              placeholder="Назва..."
            />

            <View style={styles.locationWrp}>
              <TouchableOpacity
                style={styles.buttonLocation}
                onPress={getCustomLocation}
              >
                <Feather
                  name="map-pin"
                  size={24}
                  color={styles.locationIcon.fill}
                />
              </TouchableOpacity>

              <TextInput
                style={{
                  ...styles.input,
                  ...styles.inputLocation,
                  borderBottomColor: isActiveInput.location
                    ? '#FF6C00'
                    : '#E8E8E8',
                }}
                value={state.location?.title}
                onChangeText={value =>
                  setState(prev => ({
                    ...prev,
                    location: { ...prev.location, title: value },
                  }))
                }
                onFocus={() => {
                  setIsShowKeyboard(true);
                  handleInputFocus('location');
                }}
                onBlur={() => handleInputBlur('location')}
                inputMode="text"
                placeholder="Місцевість..."
              />

              {modalVisible && (
                <ModalWrp
                  title="Місцезнаходження"
                  location={state.location}
                  modalVisible={modalVisible}
                  setModalVisible={setModalVisible}
                  draggableMarker={draggableMarker}
                />
              )}
            </View>
          </View>
        </View>

        {/* buttons */}
        <View
          style={
            !isShowKeyboard
              ? { ...styles.buttonsWrp }
              : {
                  ...styles.buttonsWrp,
                  flexDirection: 'row-reverse',
                  marginTop: hp('5%'),
                }
          }
        >
          <TouchableOpacity
            style={styleSendBtn}
            onPress={publishPost}
            disabled={!state.photoUri}
          >
            <Text
              style={
                !state.photoUri
                  ? styles.buttonFormText
                  : { ...styles.buttonFormText, ...styles.activeButtonFormText }
              }
            >
              Опублікувати
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styleRemoveBtn}
            onPress={() => {
              setState(INITIAL_POST);
              hideKeyboard();
            }}
            disabled={!state.photoUri}
          >
            <AntDesign
              name="delete"
              size={24}
              color={
                !state.photoUri
                  ? styles.removeBtn.fill
                  : styles.activeRemoveBtn.fill
              }
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
