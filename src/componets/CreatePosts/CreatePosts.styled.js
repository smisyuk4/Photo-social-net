import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 32,
  },
  cameraWrp: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#E8E8E8',
    overflow: 'hidden',
  },
  camera: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    height: 240,
  },
  takePhotoContainer: {
    position: 'absolute',
    top: 0,
    // zIndex: 2,
  },
  photo: {
    height: 240,
  },
  buttonCapture: {
    height: 60,
    width: 60,
    // zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  buttonToggle: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    // zIndex: 1,
    alignSelf: 'flex-end',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    // color: 'white',
  },
  removeBtn: {
    height: 40,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#F6F6F6',
    fill: '#DADADA',
  },
  activeRemoveBtn: {
    backgroundColor: '#FF6C00',
    fill: '#FFFFFF',
  },
});
