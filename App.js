
import { useState } from 'react'
import { ImageBackground, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import image from "./src/images/photoBg.jpeg"
import { RegisterForm, LoginForm } from './src/componets';

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false)

  const hideKeyboard = ()=>{
    setIsShowKeyboard(false)
    Keyboard.dismiss()
}

  return (
    <TouchableWithoutFeedback 
      onPress={hideKeyboard} 
      style={styles.container}
    >
      <ImageBackground source={image} style={styles.imageBg}>      
          <RegisterForm isShowKeyboard={isShowKeyboard} setIsShowKeyboard={setIsShowKeyboard} hideKeyboard={hideKeyboard}/>       
            {/* <LoginForm isShowKeyboard={isShowKeyboard} setIsShowKeyboard={setIsShowKeyboard} hideKeyboard={hideKeyboard}/>        */}
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
