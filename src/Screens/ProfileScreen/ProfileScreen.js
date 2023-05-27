import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSignOutUser } from '../../../redux/auth/authOperations';
import {
  selectStateUserId,
  selectStateLogin,
  selectStateAvatar,
} from '../../../redux/selectors';
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import image from '../../images/photoBg.jpeg';

import { db } from '../../../firebase/config';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { ProfileList } from '../../components/ProfileList/ProfileList';
import { styles } from './ProfileScreen.styles';

export const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const userId = useSelector(selectStateUserId);
  const login = useSelector(selectStateLogin);
  const avatar = useSelector(selectStateAvatar);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const dbRef = collection(db, 'posts');
    const myQuery = query(dbRef, where('userId', '==', userId));

    onSnapshot(myQuery, querySnapshot => {
      setPosts(querySnapshot.docs.map(doc => doc.data()));
    });
  }, []);

  // avatar
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       await MediaLibrary.requestPermissionsAsync();
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   })();
  // }, []);

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
        setState(prev => ({ ...prev, avatarUri: result.assets[0].uri }));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ImageBackground source={image} style={styles.imageBg}>
      <View style={styles.container}>
        {/* <Button title="signOut" onPress={() => dispatch(authSignOutUser())} /> */}
        <View style={styles.myPostsContainer}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatarWrp}>
              <Image
                source={{ uri: avatar }}
                style={styles.avatarImg}
              />
            </View>

            <TouchableOpacity style={styles.buttonAvatar} onPress={pickImage}>
              <Text style={styles.buttonAvatarText}>{'+'}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.exitBtn}>
            <Feather
              name="log-out"
              size={24}
              color={styles.exitBtn.color}
              onPress={() => dispatch(authSignOutUser())}
            />
          </View>

          <Text style={styles.login}>{login}</Text>

          <ProfileList posts={posts} login={login} navigation={navigation} />
        </View>
      </View>
    </ImageBackground>
  );
};
