import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { PostsList } from '../../PostsList/PostsList';
import { CommentsScreen } from '../CommentsScreen';
import { MapScreen } from '../MapScreen';

import { styles } from './PostsScreen.styles';

const PostStack = createStackNavigator();

export const PostsScreen = ({ navigation }) => {
  return (
    <PostStack.Navigator>
      <PostStack.Screen
        name="Posts"
        component={PostsList}
        options={{
          title: 'Публікації',
          headerRight: () => (
            <Feather
              name="log-out"
              size={24}
              color="black"
              onPress={navigation.goBack}
            />
          ),
        }}
      />

      <PostStack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          title: 'Коментарі',
          headerLeft: () => (
            <Feather
              name="arrow-left"
              size={24}
              color="black"
              onPress={navigation.goBack}
            />
          ),
          tabBarStyle: { display: 'none' },
        }}
      />

      <PostStack.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: 'Карта',
          headerLeft: () => (
            <Feather
              name="arrow-left"
              size={24}
              color="black"
              onPress={navigation.goBack}
            />
          ),
          tabBarStyle: { display: 'none' },
        }}
      />
    </PostStack.Navigator>
  );
};
