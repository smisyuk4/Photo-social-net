import { useState, useEffect, useRef } from 'react';
import {
  View,
  Image,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';

import { MaterialIcons, Feather, AntDesign } from '@expo/vector-icons';
import { LoaderScreen } from '../Screens/LoaderScreen/LoaderScreen';
import { styles } from './CreatePosts.styled';
// import { set } from 'react-native-reanimated';

export const CreatePosts = () => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef();
  const [photoUri, setPhotoUri] = useState('');
  const width = Dimensions.get('window').width;

  // const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
    })();
  }, []);

  if (!permission) {
    return <LoaderScreen />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const toggleCameraType = () => {
    console.log('flip camera');
    setType(current =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const takePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.current.takePictureAsync();
      console.log('uri ', uri);
      setPhotoUri(uri);
      // await MediaLibrary.createAssetAsync(uri);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPhotoUri(result.assets[0].uri);
    }
  };

  const removePost = () => {
    setPhotoUri('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.cameraWrp}>
        <Camera style={styles.camera} type={type} ref={cameraRef}>
          {photoUri !== '' && (
            <View style={styles.takePhotoContainer}>
              <Image
                source={{ uri: photoUri }}
                style={{ width: width, ...styles.photo }}
                resizeMode="contain"
              />
            </View>
          )}
          <TouchableOpacity style={styles.buttonCapture} onPress={takePhoto}>
            <MaterialIcons name="photo-camera" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonToggle}
            onPress={toggleCameraType}
          >
            <Feather name="repeat" size={24} color="white" />
          </TouchableOpacity>
        </Camera>
      </View>

      <TouchableOpacity onPress={pickImage}>
        <Text style={styles.buttonGallaryText}>Завантажити фото</Text>
      </TouchableOpacity>

      <View style={styles.inputsWrp}>
        <TextInput
          style={styles.input}
          inputMode="text"
          placeholder="Назва..."
        />

        <View>
          <TouchableOpacity style={styles.buttonLocation} onPress={() => {}}>
            <Feather
              name="map-pin"
              size={24}
              color={styles.locationIcon.fill}
            />
          </TouchableOpacity>
          <TextInput
            style={{ ...styles.input, ...styles.inputLocation }}
            inputMode="text"
            placeholder="Місцевість..."
          />
        </View>
      </View>

      <TouchableOpacity
        style={
          !photoUri
            ? styles.buttonForm
            : { ...styles.buttonForm, ...styles.activeButtonForm }
        }
        onPress={() => {}}
        disabled={!photoUri}
      >
        <Text
          style={
            !photoUri
              ? styles.buttonFormText
              : { ...styles.buttonFormText, ...styles.activeButtonFormText }
          }
        >
          Опублікувати
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={
          !photoUri
            ? styles.removeBtn
            : { ...styles.removeBtn, ...styles.activeRemoveBtn }
        }
        onPress={removePost}
        disabled={!photoUri}
      >
        <AntDesign
          name="delete"
          size={24}
          color={
            !photoUri ? styles.removeBtn.fill : styles.activeRemoveBtn.fill
          }
        />
      </TouchableOpacity>
    </View>
  );
};
