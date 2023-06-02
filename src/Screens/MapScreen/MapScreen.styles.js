import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    marginVertical: hp('3.8%'),
  },
  mapWrp: {
    backgroundColor: 'pink',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  mapStyle: {
    borderWidth: 4,
    borderColor: '#FF6C00',
    borderRadius: 8,
    width: '100%',
    height: '100%',
  },
});
