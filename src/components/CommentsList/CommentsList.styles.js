import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    gap: 32,
  },
  photo: {
    height: hp('28.8%'),
    marginTop: hp('3.8%'),
    marginBottom: hp('0.96%'),
    borderRadius: 8,
    borderColor: '#E8E8E8',
  },
});
