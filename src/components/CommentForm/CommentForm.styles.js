import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  formWrp: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F6F6F6',
  },
  input: {
    flex: 4,
    paddingTop: 4,
    paddingLeft: 4,
    paddingBottom: 4,
    height: 50,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: '500',
    // lineHeight: 19,
    color: '#212121',
    backgroundColor: '#F6F6F6',

    borderBottomWidth: 1,
  },
  buttonForm: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#F6F6F6',
    // backgroundColor: 'pink',
    fill: '#BDBDBD',
  },
  activeButtonForm: {
    backgroundColor: '#FF6C00',
    fill: '#fff',
  },
});
