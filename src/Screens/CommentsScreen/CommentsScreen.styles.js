import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  keyboardWrp: {
    flex: 1,
    paddingHorizontal: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  headerBackBtn: '#212121',
  photo: {
    height: hp('28.8%'),
    marginBottom: hp('0.96%'),
    borderRadius: 8,
    borderColor: '#E8E8E8',
  },
});
