import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  permission: {},
  container: {
    // marginTop: 32,
    marginTop: hp('3.8%'), // *0.12 from px
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
    // height: 240,
    height: hp('28.8%'), // *0.12 from px
  },
  takePhotoContainer: {
    position: 'absolute',
    top: 0,
    // zIndex: 2,
    backgroundColor: '#E8E8E8',
  },
  photo: {
    // height: 240,
    height: hp('28.8%'), // *0.12 from px
    // height: hp('100%'),
    width: wp('100%'),
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
    // marginTop: 8,
    marginTop: hp('0.96%'), // *0.12 from px
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',
  },
  input: {
    height: 50,
    // paddingVertical: 16,
    paddingVertical: hp('1.92%'), // *0.12 from px
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19,
    color: '#212121',
    borderBottomWidth: 1,
  },
  inputLocation: {
    // paddingLeft: 28,
    paddingLeft: wp('8.4%'), //*0.3 from px
  },
  buttonLocation: {
    position: 'absolute',
    top: 12,
  },
  locationIcon: {
    fill: '#BDBDBD',
  },
  buttonForm: {
    // height: 51,
    height: hp('6.12%'), // *0.12 from px
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#F6F6F6',
  },
  activeButtonForm: {
    backgroundColor: '#FF6C00',
  },
  changedButtonForm: {
    // height: 40,
    height: hp('4.8%'), // *0.12 from px
    // width: 300,
    width: wp('50%'), //*0.5 from px
    alignSelf: 'flex-end',
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
  removeBtn: {
    // marginBottom: 30,
    marginBottom: hp('3.6%'),
    // height: 40,
    height: hp('4.8%'), // *0.12 from px
    // width: 70,
    width: wp('16.8%'), //*0.23 from px
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: '#F6F6F6',
    fill: '#DADADA',
  },
  activeRemoveBtn: {
    backgroundColor: '#FF6C00',
    fill: '#FFFFFF',
  },
  changedRemoveBtn: {
    position: 'absolute',
    // bottom: 344,
    bottom: hp('37.5%'), //*0.1 from px
  },
  changedRemoveBtnAndroid: {
    position: 'absolute',
    // bottom: 65,
    bottom: hp('14.8%'), //*0.1 from px
  },
});
