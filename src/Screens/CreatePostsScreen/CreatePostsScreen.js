import { View } from 'react-native';
import { CreatePosts } from '../../componets/CreatePosts';
import { styles } from './CreatePostsScreen.styles';

export const CreatePostsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CreatePosts navigation={navigation}/>
    </View>
  );
};
