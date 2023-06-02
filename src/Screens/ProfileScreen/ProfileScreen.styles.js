import {
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  container: {
    marginTop: hp('20%'),
    paddingHorizontal: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: '#fff',
  },
  myPostsContainer: {
    paddingTop: 92,
    minHeight: hp('50%'),
  },
  avatarContainer: {
    position: 'absolute',
    top: -60,
    alignSelf: 'center',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    borderRadius: 16,
    backgroundColor: '#F6F6F6',
  },
  avatarWrp: {
    borderRadius: 16,
    overflow: 'hidden',
    height: 120,
    width: 120,
  },
  avatarImg: {
    width: '100%',
    height: '100%',
  },
  buttonAvatar: {
    position: 'absolute',
    bottom: 13,
    right: -13,
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#FF6C00',
    backgroundColor: '#ffffff',
  },
  buttonAvatarText: {
    color: '#FF6C00',
  },
  exitBtn: {
    position: 'absolute',
    right: 0,
    top: 16,
    color: '#BDBDBD',
  },
  login: {
    marginBottom: 16,
    alignSelf: 'center',
    fontFamily: 'Roboto-Regular',
    fontSize: 30,
    fontWeight: '500',
  },
  count:{ 
    alignSelf: 'flex-end',
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    marginBottom: 3,
    color: '#BDBDBD',
  },
});
