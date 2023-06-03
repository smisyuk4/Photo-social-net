import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  postWrp: {
    marginBottom: hp('3%'),
  },
  photo: {
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    height: hp('28.8%'),
    marginBottom: hp('0.96%'),
    borderRadius: 8,
    borderColor: '#E8E8E8',
  },
  bottomInfo: {
    flexDirection: 'row',
  },
  owner: {
    marginRight: 10,
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: 'grey',
  },
  avatar: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
    borderWidth: 1,
    overflow: 'hidden',
  },
  desc: {},
  titlePost: {
    marginBottom: hp('0.96%'),
    maxWidth: wp('70%'),
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: '500',
    color: '#212121',
  },
  buttonsWrp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('75%'),
  },
  buttonComments: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentsIcon: {
    marginRight: hp('0.6%'),
    transform: [{ rotate: '-90deg' }],
    fill: '#BDBDBD',
  },
  commentsCount: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#BDBDBD',
  },
  buttonLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mapIcon: {
    marginRight: hp('0.6%'),
    fill: '#BDBDBD',
  },
  mapTitle: {
    maxWidth: wp('60%'),
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: '500',
    textDecorationLine: 'underline',
    color: '#212121',
  },
});
