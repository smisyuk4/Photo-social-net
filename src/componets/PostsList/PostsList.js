import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  selectStateLogin,
  selectStateEmail,
  selectStateAvatar,
} from '../../../redux/selectors';
import { db } from '../../../firebase/config';
import { collection, onSnapshot } from 'firebase/firestore';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Post } from '../Post';
import { styles } from './PostsList.styles';

export const PostsList = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const login = useSelector(selectStateLogin);
  const email = useSelector(selectStateEmail);
  const avatar = useSelector(selectStateAvatar);
  // console.log(login, email, avatar)

  useEffect(() => {
    const dbRef = collection(db, 'posts');

    onSnapshot(dbRef, data => {
      setPosts(data.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  if (posts.length === 0) {
    return (
      <View style={styles.container}>
        <User login={login} email={email} avatar={avatar} />
        <Text>Зараз у тебе немає фото, але можна зробити щось класне...</Text>

        <TouchableOpacity
          style={styles.buttonCapture}
          onPress={() => navigation.navigate('Create')}
        >
          <MaterialIcons name="photo-camera" size={24} color="white" />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <>
            {index === 0 && <User />}
            <Post post={item} navigation={navigation} />
          </>
        )}
      />
    </View>
  );
};

const User = ({ login, email, avatar }) => {
  return (
    <View style={styles.userWrp}>
      <Image style={styles.userPhoto} source={{ uri: avatar }} />
      <View style={styles.userInfoWrp}>
        <Text style={styles.userName}>{login}</Text>
        <Text style={styles.userEmail}>{email}</Text>
      </View>
    </View>
  );
};
