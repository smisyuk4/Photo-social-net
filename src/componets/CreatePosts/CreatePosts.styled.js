import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
  },
  camera: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    height: 240,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#E8E8E8',
  },
  takePhotoContainer: {
    position: 'absolute',
    top: 0,
    // height: 200,
    // width: 200,
    borderWidth: 1,
    borderColor: 'red'
  },
  buttonCapture: {
    height: 60,
    width: 60,

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  buttonToggle: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    alignSelf: 'flex-end',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    // color: 'white',
  },
});
