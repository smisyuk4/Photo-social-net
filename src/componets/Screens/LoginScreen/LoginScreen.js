import { useState } from 'react';
import {
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Text
} from 'react-native';
import { styles } from './LoginScreen.styles';
import image from '../../../images/photoBg.jpeg';

export const LoginScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const hideKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <View>
    <Text>log</Text>
  </View>
    // <TouchableWithoutFeedback
    //   onPress={hideKeyboard}
    //   style={styles.container}
    //   // onLayout={onLayoutRootView}
    // >
    //   <ImageBackground source={image} style={styles.imageBg}>
    //     <LoginForm
    //       isShowKeyboard={isShowKeyboard}
    //       setIsShowKeyboard={setIsShowKeyboard}
    //       hideKeyboard={hideKeyboard}
    //     />
    //   </ImageBackground>
    // </TouchableWithoutFeedback>
  );
};
