import { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { db } from '../../../firebase/config';
import { collection, getCountFromServer } from 'firebase/firestore';
import { Feather } from '@expo/vector-icons';
import { styles } from './Post.styles';

export const Post = ({ post, navigation }) => {
  // console.log('Post ====>>>', post);
  const [countComments, setCountComments] = useState(0);

  useEffect(() => {
    try {
      const checkCount = async () => {
        const dbRef = collection(db, 'posts', post.id, 'comments');

        const snapshot = await getCountFromServer(dbRef);
        setCountComments(snapshot.data().count);
      };

      checkCount();
    } catch (error) {
      console.log('Post ====>>>', error.message);
    }
  }, [post]);

  const selectTitleLocation = ({ location }) => {
    if (location.title) {
      return location.title;
    }

    if (location.postAddress && location.postAddress) {
      return `${location.postAddress?.city}, ${location.postAddress?.street}`;
    }

    return 'Гарне місце';
  };

  return (
    <View style={styles.postWrp}>
      <Image source={{ uri: post.photo }} style={styles.photo} />
      <Text style={styles.titlePost} ellipsizeMode="tail" numberOfLines={1}>
        {post.titlePost}
      </Text>

      <View style={styles.buttonsWrp}>
        <TouchableOpacity
          style={styles.buttonComments}
          onPress={() => navigation.navigate('Comments', post)}
        >
          <View style={styles.commentsIcon}>
            <Feather
              name="message-circle"
              size={24}
              color={styles.commentsIcon.fill}
            />
          </View>
          <Text style={styles.commentsCount}>{countComments}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonLocation}
          onPress={() => navigation.navigate('Map', post)}
        >
          <View style={styles.mapIcon}>
            <Feather name="map-pin" size={24} color={styles.mapIcon.fill} />
          </View>
          <Text style={styles.mapTitle} ellipsizeMode="tail" numberOfLines={1}>
            {selectTitleLocation(post)}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
