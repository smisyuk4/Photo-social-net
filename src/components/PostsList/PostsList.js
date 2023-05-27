import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  selectStateLogin,
  selectStateEmail,
  selectStateAvatar,
} from '../../../redux/selectors';
import { db } from '../../../firebase/config';
import { collection, onSnapshot } from 'firebase/firestore';
import { View, Text, FlatList, Image } from 'react-native';

import { Post } from '../Post';
import { styles } from './PostsList.styles';

export const PostsList = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const login = useSelector(selectStateLogin);
  const email = useSelector(selectStateEmail);
  const avatar = useSelector(selectStateAvatar);

  useEffect(() => {
    const dbRef = collection(db, 'posts');

    onSnapshot(dbRef, data => {
      setPosts(data.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  if (posts.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Ще ніхто не зробив фотознімки</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={({ id }) => id}
        renderItem={({ item, index }) => (
          <>
            {index === 0 && (
              <User login={login} email={email} avatar={avatar} />
            )}
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
