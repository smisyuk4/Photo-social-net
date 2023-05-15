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
      await MediaLibrary.createAssetAsync(uri);
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

      <Text style={styles.text}>Завантажити фото</Text>

      <TextInput inputMode="text" placeholder="Назва" />

      <Text style={styles.text}>Місцевість</Text>

      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.text}>Опублікувати</Text>
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
