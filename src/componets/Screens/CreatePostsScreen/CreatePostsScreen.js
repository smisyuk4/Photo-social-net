import { View } from 'react-native';
import { CreatePosts } from '../../CreatePosts';
import { styles } from './CreatePostsScreen.styles';

export const CreatePostsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CreatePosts navigation={navigation}/>
    </View>
  );
};
