import { View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './PostsScreen.styles';

export const PostsScreen = () => {
  return (
    <View>
      <Text>
        logout
        <Ionicons name="md-checkmark-circle" size={32} color="green" />;
      </Text>
      <Text>PostsScreen component</Text>
    </View>
  );
};
