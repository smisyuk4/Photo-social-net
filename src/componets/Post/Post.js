import { View, Text, Image } from 'react-native';
import { styles } from './Post.styles';

export const Post = ({ post }) => {
  return (
    <View>
      {post.location.postAddress.city && (
        <Text>city: {post.location.postAddress.city}</Text>
      )}

      <Image source={{ uri: post.photoUri }} style={styles.photo} />
    </View>
  );
};
