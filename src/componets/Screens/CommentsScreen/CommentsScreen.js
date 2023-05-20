import { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './CommentsScreen.styles';

export const CommentsScreen = ({navigation}) => {
  // useEffect(() => {
  //   navigation.setOptions({ 
  //     tabBarVisible: false,
  //     title: 'test-2'
  //   })
    // navigation.setOptions({
    //   title: value === '' ? 'No title' : value,
    // });
  // }, [navigation]);


  return (
    <View style={styles.wrapper}>
      <Text>CommentsScreen</Text>
    </View>
  );
};
