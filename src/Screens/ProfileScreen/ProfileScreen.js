import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  authSignOutUser,
  authUpdateUser,
} from '../../../redux/auth/authOperations';
import {
  selectStateUserId,
  selectStateLogin,
  selectStateAvatar,
} from '../../../redux/selectors';
import { myStorage } from '../../../firebase/config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';
import image from '../../images/photoBg.jpeg';

import { db } from '../../../firebase/config';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { ProfileList } from '../../components/ProfileList/ProfileList';
import { askIfQuit } from '../Home';
import { styles } from './ProfileScreen.styles';

export const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const userId = useSelector(selectStateUserId);
  const login = useSelector(selectStateLogin);
  const avatar = useSelector(selectStateAvatar);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    try {
      const dbRef = collection(db, 'posts');
      const myQuery = query(dbRef, where('userId', '==', userId));

      onSnapshot(myQuery, querySnapshot => {
        setPosts(
          querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        );
      });
    } catch (error) {
      console.log('ProfileScreen ====>>>', error.message);
    }
  }, []);

  // avatar
  useEffect(() => {
    (async () => {
      try {
        await MediaLibrary.requestPermissionsAsync();
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  const pickImage = async () => {
    try {
      await MediaLibrary.requestPermissionsAsync();

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        return result.assets[0].uri;
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

      const imageRef = await ref(myStorage, `userAvatars/${uniquePostId}`);
      await uploadBytes(imageRef, file);

      return await getDownloadURL(imageRef);
    } catch (error) {
      console.log('uploadPhotoToServer', error.message);
    }
  };

  const changeAvatar = async () => {
    const avatarUri = await pickImage();
    const avatarURL = await uploadPhotoToServer(avatarUri);
    dispatch(authUpdateUser({ avatarURL }));
  };

  return (
    <ImageBackground source={image} style={styles.imageBg}>
      <View style={styles.container}>
        <View style={styles.myPostsContainer}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatarWrp}>
              <Image source={{ uri: avatar }} style={styles.avatarImg} />
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
              // onPress={() => dispatch(authSignOutUser())}
              onPress={() => askIfQuit(dispatch)}
            />
          </View>

          <Text style={styles.login}>{login}</Text>

          <ProfileList posts={posts} navigation={navigation} />
        </View>
      </View>
    </ImageBackground>
  );
};
