import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { styles } from './Post.styles';

export const Post = ({ post, navigation }) => {
  return (
    <View style={styles.postWrp}>
      <Image source={{ uri: post.photoUri }} style={styles.photo} />
      <Text style={styles.titlePost}>title: {post.titlePost}</Text>

      <View style={styles.buttonsWrp}>
        <TouchableOpacity
          style={styles.buttonComments}
          onPress={() => navigation.navigate('Comments')}
        >
          <Feather name="message-circle" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonLocation}
          onPress={() => navigation.navigate('Map')}
        >
          <Feather name="map-pin" size={24} color="black" />
          <Text>location{post.location.title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
