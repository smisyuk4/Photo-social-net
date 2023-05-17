import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    borderWidth: 1,
    borderColor: 'red',
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
    backgroundColor: '#E8E8E8',
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
  buttonGalleryText: {
    marginTop: 8,
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',
  },
  inputsWrp: {
    gap: 16,
    paddingVertical: 32,
  },
  input: {
    height: 50,
    paddingVertical: 16,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19,
    color: '#212121',
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  inputLocation: {
    paddingLeft: 28,
  },
  buttonLocation: {
    position: 'absolute',
    top: 12,
  },
  locationIcon: {
    fill: '#BDBDBD',
  },
  buttonForm: {
    height: 51,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#F6F6F6',
  },
  activeButtonForm: {
    backgroundColor: '#FF6C00',
  },
  buttonFormText: {
    alignItems: 'center',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',
  },
  activeButtonFormText: {
    color: '#fff',
  },
  removeBtnWrp:{
    borderWidth: 1,
    borderColor: 'green',
    // position: 'absolute',
    // bottom: -50,
    // flexDirection: 'row',
    justifyContent: 'flex-end',
    // alignItems: 'center',
    // alignSelf: 'center'
    // marginBottom: 150,
  },
  removeBtn: {
    marginBottom: 70,
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
