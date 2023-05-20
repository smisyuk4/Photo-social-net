// import { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { PostsList } from '../../PostsList/PostsList';

import { styles } from './PostsScreen.styles';

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
