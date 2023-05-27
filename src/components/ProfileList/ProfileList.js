import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { Post } from '../Post';
import { MaterialIcons } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { styles } from './ProfileList.styles';

export const ProfileList = ({ navigation, posts, login }) => {

  if (posts.length === 0) {
    return (
      <View style={styles.container}>

        <Text>Зараз у тебе немає фото, але можна зробити щось класне...</Text>

        <TouchableOpacity
          style={styles.buttonCapture}
          onPress={() => navigation.navigate('Create')}
        >
          <MaterialIcons name="photo-camera" size={24} color="white" />
        </TouchableOpacity>
      </View>
    );
  }


  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <Post post={item} navigation={navigation} />}
        ListFooterComponent={<View style={{height: 100}}/>}
      />
    </View>
  );
};
