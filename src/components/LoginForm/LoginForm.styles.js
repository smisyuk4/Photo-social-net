import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  form: {
    paddingTop: hp('3%'),
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
  },
  title: {
    marginBottom: 16,
    alignSelf: 'center',
    fontFamily: 'Roboto-Regular',
    fontSize: 30,
    fontWeight: '500',
  },
  input: {
    marginTop: 16,
    padding: 16,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: '#F6F6F6',
  },
  buttonPassword: {
    position: 'absolute',
    top: 21,
    right: 6,
    zIndex: 1000,
    padding: 10,
    alignSelf: 'flex-end',
  },
  buttonPasswordText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#1B4371',
  },
  buttonForm: {
    height: hp('6%'),
    marginTop: hp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#FF6C00',
  },
  buttonFormText: {
    alignItems: 'center',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#fff',
  },
  link: {
    marginTop: 16,
    alignSelf: 'center',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#1B4371',
  },
});
