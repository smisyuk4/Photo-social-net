import { useState } from 'react';
import { View, Text, Button, TouchableOpacity, TextInput } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { MaterialIcons, Feather } from '@expo/vector-icons';
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
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <TouchableOpacity style={styles.buttonCapture} onPress={() => {}}>
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
