import { useState } from 'react';
import {
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Text
} from 'react-native';
import { styles } from './RegistrationScreen.styles';
import image from '../../../images/photoBg.jpeg';

export const RegistrationScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const hideKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <View>
      <Text>reg</Text>
    </View>
  //   <TouchableWithoutFeedback
  //   onPress={hideKeyboard}
  //   style={styles.container}
  //   // onLayout={onLayoutRootView}
  // >
  //   <ImageBackground source={image} style={styles.imageBg}>
  //     <RegisterForm
  //       isShowKeyboard={isShowKeyboard}
  //       setIsShowKeyboard={setIsShowKeyboard}
  //       hideKeyboard={hideKeyboard}
  //     />
  //   </ImageBackground>
  // </TouchableWithoutFeedback>
  )
};
