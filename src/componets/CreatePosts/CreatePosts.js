import { useState, useEffect, useRef } from 'react';
import {
  View,
  Image,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import { LoaderScreen } from '../Screens/LoaderScreen/LoaderScreen';
import { styles } from './CreatePosts.styled';
import { set } from 'react-native-reanimated';

export const CreatePosts = () => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [cameraRef, setCameraRef] = useState(null);
  const [uri, setUri] = useState(null);

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
    setType(current =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const takePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      setUri(uri);
      await MediaLibrary.createAssetAsync(uri);
    }
  };

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        ref={ref => {
          setCameraRef(ref);
        }}
      >
        {/* {uri !== null && (
          <View style={styles.takePhotoContainer}>
            <Image source={{ uri }} />
          </View>
        )} */}
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
      <Text style={styles.text}>Завантажити фото</Text>

      <TextInput inputMode="text" placeholder="Назва" />

      <Text style={styles.text}>Місцевість</Text>

      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.text}>Опублікувати</Text>
      </TouchableOpacity>
    </View>
  );
};
