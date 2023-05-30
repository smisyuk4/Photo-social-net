import { createStackNavigator } from '@react-navigation/stack';
import { PostsList } from '../../components/PostsList';
import { styles } from './PostsScreen.styles';

const PostStack = createStackNavigator();

const screenOptions = ({ navigation, route }) => ({
  ...styles,
  title: 'Публікації',
  headerRight: () => {},
});

export const PostsScreen = ({ navigation }) => {
  return (
    <PostStack.Navigator screenOptions={screenOptions}>
      <PostStack.Screen
        name="Posts"
        component={PostsList}
        // options={{ change inside PostsList }}
      />
    </PostStack.Navigator>
  );
};
