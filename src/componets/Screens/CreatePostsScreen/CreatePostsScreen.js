import { View } from 'react-native';
import { CreatePosts } from '../../CreatePosts';
import { styles } from './CreatePostsScreen.styles';

export const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <CreatePosts />
    </View>
  );
};
