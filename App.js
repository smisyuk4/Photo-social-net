import { useState, useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import image from './src/images/photoBg.jpeg';
import { RegisterForm, LoginForm } from './src/componets';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const hideKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const [fontsLoaded] = useFonts({
    'Roboto-Italic': require('./src/fonts/Roboto/Roboto-Italic.ttf'),
    'Roboto-Regular': require('./src/fonts/Roboto/Roboto-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback
      onPress={hideKeyboard}
      style={styles.container}
      onLayout={onLayoutRootView}
    >
      <ImageBackground source={image} style={styles.imageBg}>
        <RegisterForm
          isShowKeyboard={isShowKeyboard}
          setIsShowKeyboard={setIsShowKeyboard}
          hideKeyboard={hideKeyboard}
        />
        {/* <LoginForm
          isShowKeyboard={isShowKeyboard}
          setIsShowKeyboard={setIsShowKeyboard}
          hideKeyboard={hideKeyboard}
        /> */}
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageBg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
});
