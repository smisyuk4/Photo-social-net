import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { LoaderScreen } from '../Screens/LoaderScreen/LoaderScreen';
import { styles } from './CreatePosts.styled';

export const CreatePosts = () => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

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
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      {/* <Text style={styles.text}>Завантажити фото</Text>

      <TextInput inputMode="text" placeholder="Назва" />

      <Text style={styles.text}>Місцевість</Text>

      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.text}>Опублікувати</Text>
      </TouchableOpacity> */}
    </View>
  );
};
