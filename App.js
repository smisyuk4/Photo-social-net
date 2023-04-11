import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import image from "./src/images/photoBg.jpeg"
import { RegisterForm } from './src/componets';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.imageBg}>
        {/* <Text style={styles.text}>hello</Text> */}
        <RegisterForm/>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  imageBg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  text: {
    // color: 'white',
    // fontSize: 42,
    // lineHeight: 84,
    // fontWeight: 'bold',
    // textAlign: 'center',
    // backgroundColor: '#000000c0',
  }
});
