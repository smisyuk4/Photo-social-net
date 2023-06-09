import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authUpdateUser } from '../../../redux/auth/authOperations';
import {
  selectStateUserId,
  selectStateLogin,
  selectStateAvatar,
  selectorStateComment,
} from '../../../redux/selectors';
import { myStorage } from '../../../firebase/config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';
import image from '../../images/photoBg.jpeg';

import { db } from '../../../firebase/config';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { ProfileList } from '../../components/ProfileList/ProfileList';
import { askIfQuit, ImageManipulator } from '../../helpers';
import { LoaderScreen } from '../LoaderScreen';
import { styles } from './ProfileScreen.styles';

export const ProfileScreen = ({ navigation, route }) => {
  const [posts, setPosts] = useState([]);
  const [isShowLoaderAvatar, setIsShowLoaderAvatar] = useState(false);
  const [isShowLoaderPosts, setIsShowLoaderPosts] = useState(false);
  const dispatch = useDispatch();
  const userId = useSelector(selectStateUserId);
  const login = useSelector(selectStateLogin);
  const avatar = useSelector(selectStateAvatar);
  const comment = useSelector(selectorStateComment);

  useEffect(() => {
    setIsShowLoaderPosts(true);
    const dbRef = collection(db, 'posts');
    const myQuery = query(dbRef, where('owner.userId', '==', userId));

    onSnapshot(
      myQuery,
      querySnapshot => {
        const posts = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        const reversPosts = posts.reverse();
        setPosts(reversPosts);
        setIsShowLoaderPosts(false);
      },
      () => {}
    );
  }, [userId, comment]);

  const pickImage = async () => {
    try {
      const { assets, canceled } = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!canceled) {
        const [{ uri }] = assets;

        const newUri = await ImageManipulator(
          uri,
          [
            {
              resize: { height: 240, width: 240 },
            },
          ],
          0.5
        );
        return newUri;
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const uploadPhotoToServer = async photo => {
    const uniquePostId = Date.now().toString();

    try {
      const response = await fetch(photo);

      const file = await response.blob();

      const imageRef = ref(myStorage, `userAvatars/${uniquePostId}`);
      await uploadBytes(imageRef, file);

      return await getDownloadURL(imageRef);
    } catch (error) {
      console.log('uploadPhotoToServer =====>> ', error);
      Alert.alert('Вибачте, але фото не зберіглось на сервері', error.message);
    }
  };

  const changeAvatar = async () => {
    setIsShowLoaderAvatar(true);

    const avatarUri = await pickImage();
    const avatarURL = await uploadPhotoToServer(avatarUri);

    if (avatarURL) {
      dispatch(authUpdateUser({ avatarURL }));
      Alert.alert('Вітаємо! Аватар змінено');
    }
    setIsShowLoaderAvatar(false);
  };

  return (
    <ImageBackground source={image} style={styles.imageBg}>
      <View style={styles.container}>
        <View style={styles.myPostsContainer}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatarWrp}>
              {isShowLoaderAvatar ? (
                <LoaderScreen />
              ) : (
                <Image source={{ uri: avatar }} style={styles.avatarImg} />
              )}
            </View>

            <TouchableOpacity
              style={styles.buttonAvatar}
              onPress={changeAvatar}
            >
              <Text style={styles.buttonAvatarText}>{'+'}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.exitBtn}>
            <Feather
              name="log-out"
              size={24}
              color={styles.exitBtn.color}
              onPress={() => {
                askIfQuit(dispatch);
              }}
            />
          </View>

          <Text style={styles.login}>{login}</Text>
          <Text style={styles.count}>Всього публікацій: {posts.length}</Text>

          {isShowLoaderPosts ? (
            <LoaderScreen />
          ) : (
            <ProfileList posts={posts} navigation={navigation} route={route} />
          )}
        </View>
      </View>
    </ImageBackground>
  );
};
