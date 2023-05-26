import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 16,
  },
  container: {
    flex: 2,
    marginTop: hp('3.8%'),
  },
  input: {
    height: 50,
    paddingVertical: hp('1.92%'),
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19,
    color: '#212121',
    borderBottomWidth: 1,
  },
  locationWrp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputLocation: {
    flexDirection: 'column',
    flex: 24,
  },
  buttonLocation: {
    flex: 2,
  },
  locationIcon: {
    fill: '#BDBDBD',
  },
  buttonsWrp: {
    flex: 1,
    justifyContent: 'space-between',
  },
  buttonForm: {
    height: hp('6.12%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#F6F6F6',
  },
  activeButtonForm: {
    backgroundColor: '#FF6C00',
  },
  changedButtonForm: {
    width: wp('50%'),
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
});
