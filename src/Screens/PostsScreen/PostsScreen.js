import { createStackNavigator } from '@react-navigation/stack';
import { PostsList } from '../../componets/PostsList';

const PostStack = createStackNavigator();

export const PostsScreen = ({ navigation }) => {
  return (
    <PostStack.Navigator>
      <PostStack.Screen
        name="Posts"
        component={PostsList}
        options={{ headerShown: false }}
      />
    </PostStack.Navigator>
  );
};
