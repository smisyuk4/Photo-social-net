import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectStateLogin, selectStateEmail, selectStateAvatar } from '../../../redux/selectors';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Post } from '../Post';
import { styles } from './PostsList.styles';

export const PostsList = ({ navigation, route }) => {
  const [posts, setPosts] = useState([]);
  const login = useSelector(selectStateLogin);
  const email = useSelector(selectStateEmail);
  const avatar = useSelector(selectStateAvatar);
  console.log(login, email, avatar)

  useEffect(() => {
    if (route.params) {
      setPosts(prev => [...prev, route.params]);
    }
  }, [route.params]);

  if (posts.length === 0) {
    return (
      <View style={styles.container}>
        <User login={login} email={email} avatar={avatar}/>
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
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <>
            {index === 0 && <User />}
            <Post post={item} navigation={navigation} />
          </>
        )}
      />
    </View>
  );
};

const User = ({ login, email, avatar }) => {
  return (
    <View style={styles.userWrp}>
      <Image style={styles.userPhoto}    source={{ uri: avatar }}/>
      <View style={styles.userInfoWrp}>
        <Text style={styles.userName}>{login}</Text>
        <Text style={styles.userEmail}>{email}</Text>
      </View>
    </View>
  );
};

const POSTS = [
  {
    location: {
      latitude: 37.785834,
      longitude: -122.406417,
      postAddress: {
        street: 'Stockton St',
        city: 'Сан-Франциско',
        country: 'Сполучені Штати Америки',
        region: 'CA',
        district: 'Union Square',
      },
    },
    photoUri:
      'file:///Users/sergiimisyuk/Library/Developer/CoreSimulator/Devices/0A5769BA-577D-404B-8727-6E0407760A36/data/Containers/Data/Application/C5A38197-ABA3-4E1B-B570-0AA80041BAEC/Library/Caches/ExponentExperienceData/%2540anonymous%252FMyPain-fc1e4b88-0b84-4949-ae78-6c3d5dad91e3/Camera/574A3359-8CA3-4DBD-B9B8-42230AE1AA82.jpg',
    titlePost: '',
  },
  {
    location: {
      latitude: 37.785834,
      longitude: -122.406417,
      postAddress: {
        street: 'Stockton St',
        city: 'Сан-Франциско',
        country: 'Сполучені Штати Америки',
        region: 'CA',
        district: 'Union Square',
      },
    },
    photoUri:
      'file:///Users/sergiimisyuk/Library/Developer/CoreSimulator/Devices/0A5769BA-577D-404B-8727-6E0407760A36/data/Containers/Data/Application/C5A38197-ABA3-4E1B-B570-0AA80041BAEC/Library/Caches/ExponentExperienceData/%2540anonymous%252FMyPain-fc1e4b88-0b84-4949-ae78-6c3d5dad91e3/Camera/574A3359-8CA3-4DBD-B9B8-42230AE1AA82.jpg',
    titlePost: '',
  },
  {
    location: {
      latitude: 37.785834,
      longitude: -122.406417,
      postAddress: {
        street: 'Stockton St',
        city: 'Сан-Франциско',
        country: 'Сполучені Штати Америки',
        region: 'CA',
        district: 'Union Square',
      },
    },
    photoUri:
      'file:///Users/sergiimisyuk/Library/Developer/CoreSimulator/Devices/0A5769BA-577D-404B-8727-6E0407760A36/data/Containers/Data/Application/C5A38197-ABA3-4E1B-B570-0AA80041BAEC/Library/Caches/ExponentExperienceData/%2540anonymous%252FMyPain-fc1e4b88-0b84-4949-ae78-6c3d5dad91e3/Camera/574A3359-8CA3-4DBD-B9B8-42230AE1AA82.jpg',
    titlePost: '',
  },
  {
    location: {
      latitude: 37.785834,
      longitude: -122.406417,
      postAddress: {
        street: 'Stockton St',
        city: 'Сан-Франциско',
        country: 'Сполучені Штати Америки',
        region: 'CA',
        district: 'Union Square',
      },
    },
    photoUri:
      'file:///Users/sergiimisyuk/Library/Developer/CoreSimulator/Devices/0A5769BA-577D-404B-8727-6E0407760A36/data/Containers/Data/Application/C5A38197-ABA3-4E1B-B570-0AA80041BAEC/Library/Caches/ExponentExperienceData/%2540anonymous%252FMyPain-fc1e4b88-0b84-4949-ae78-6c3d5dad91e3/Camera/574A3359-8CA3-4DBD-B9B8-42230AE1AA82.jpg',
    titlePost: '',
  },
  {
    location: {
      latitude: 37.785834,
      longitude: -122.406417,
      postAddress: {
        street: 'Stockton St',
        city: 'Сан-Франциско',
        country: 'Сполучені Штати Америки',
        region: 'CA',
        district: 'Union Square',
      },
    },
    photoUri:
      'file:///Users/sergiimisyuk/Library/Developer/CoreSimulator/Devices/0A5769BA-577D-404B-8727-6E0407760A36/data/Containers/Data/Application/C5A38197-ABA3-4E1B-B570-0AA80041BAEC/Library/Caches/ExponentExperienceData/%2540anonymous%252FMyPain-fc1e4b88-0b84-4949-ae78-6c3d5dad91e3/Camera/574A3359-8CA3-4DBD-B9B8-42230AE1AA82.jpg',
    titlePost: '',
  },
  {
    location: {
      latitude: 37.785834,
      longitude: -122.406417,
      postAddress: {
        street: 'Stockton St',
        city: 'Сан-Франциско',
        country: 'Сполучені Штати Америки',
        region: 'CA',
        district: 'Union Square',
      },
    },
    photoUri:
      'file:///Users/sergiimisyuk/Library/Developer/CoreSimulator/Devices/0A5769BA-577D-404B-8727-6E0407760A36/data/Containers/Data/Application/C5A38197-ABA3-4E1B-B570-0AA80041BAEC/Library/Caches/ExponentExperienceData/%2540anonymous%252FMyPain-fc1e4b88-0b84-4949-ae78-6c3d5dad91e3/Camera/574A3359-8CA3-4DBD-B9B8-42230AE1AA82.jpg',
    titlePost: '',
  },
  {
    location: {
      latitude: 37.785834,
      longitude: -122.406417,
      postAddress: {
        street: 'Stockton St',
        city: 'Сан-Франциско',
        country: 'Сполучені Штати Америки',
        region: 'CA',
        district: 'Union Square',
      },
    },
    photoUri:
      'file:///Users/sergiimisyuk/Library/Developer/CoreSimulator/Devices/0A5769BA-577D-404B-8727-6E0407760A36/data/Containers/Data/Application/C5A38197-ABA3-4E1B-B570-0AA80041BAEC/Library/Caches/ExponentExperienceData/%2540anonymous%252FMyPain-fc1e4b88-0b84-4949-ae78-6c3d5dad91e3/Camera/574A3359-8CA3-4DBD-B9B8-42230AE1AA82.jpg',
    titlePost: '',
  },
  {
    location: {
      latitude: 37.785834,
      longitude: -122.406417,
      postAddress: {
        street: 'Stockton St',
        city: 'Сан-Франциско',
        country: 'Сполучені Штати Америки',
        region: 'CA',
        district: 'Union Square',
      },
    },
    photoUri:
      'file:///Users/sergiimisyuk/Library/Developer/CoreSimulator/Devices/0A5769BA-577D-404B-8727-6E0407760A36/data/Containers/Data/Application/C5A38197-ABA3-4E1B-B570-0AA80041BAEC/Library/Caches/ExponentExperienceData/%2540anonymous%252FMyPain-fc1e4b88-0b84-4949-ae78-6c3d5dad91e3/Camera/574A3359-8CA3-4DBD-B9B8-42230AE1AA82.jpg',
    titlePost: '',
  },
  {
    location: {
      latitude: 37.785834,
      longitude: -122.406417,
      postAddress: {
        street: 'Stockton St',
        city: 'Сан-Франциско',
        country: 'Сполучені Штати Америки',
        region: 'CA',
        district: 'Union Square',
      },
    },
    photoUri:
      'file:///Users/sergiimisyuk/Library/Developer/CoreSimulator/Devices/0A5769BA-577D-404B-8727-6E0407760A36/data/Containers/Data/Application/C5A38197-ABA3-4E1B-B570-0AA80041BAEC/Library/Caches/ExponentExperienceData/%2540anonymous%252FMyPain-fc1e4b88-0b84-4949-ae78-6c3d5dad91e3/Camera/574A3359-8CA3-4DBD-B9B8-42230AE1AA82.jpg',
    titlePost: '',
  },
  {
    location: {
      latitude: 37.785834,
      longitude: -122.406417,
      postAddress: {
        street: 'Stockton St',
        city: 'Сан-Франциско',
        country: 'Сполучені Штати Америки',
        region: 'CA',
        district: 'Union Square',
      },
    },
    photoUri:
      'file:///Users/sergiimisyuk/Library/Developer/CoreSimulator/Devices/0A5769BA-577D-404B-8727-6E0407760A36/data/Containers/Data/Application/C5A38197-ABA3-4E1B-B570-0AA80041BAEC/Library/Caches/ExponentExperienceData/%2540anonymous%252FMyPain-fc1e4b88-0b84-4949-ae78-6c3d5dad91e3/Camera/574A3359-8CA3-4DBD-B9B8-42230AE1AA82.jpg',
    titlePost: '',
  },
  {
    location: {
      latitude: 37.785834,
      longitude: -122.406417,
      postAddress: {
        street: 'Stockton St',
        city: 'Сан-Франциско',
        country: 'Сполучені Штати Америки',
        region: 'CA',
        district: 'Union Square',
      },
    },
    photoUri:
      'file:///Users/sergiimisyuk/Library/Developer/CoreSimulator/Devices/0A5769BA-577D-404B-8727-6E0407760A36/data/Containers/Data/Application/C5A38197-ABA3-4E1B-B570-0AA80041BAEC/Library/Caches/ExponentExperienceData/%2540anonymous%252FMyPain-fc1e4b88-0b84-4949-ae78-6c3d5dad91e3/Camera/574A3359-8CA3-4DBD-B9B8-42230AE1AA82.jpg',
    titlePost: '',
  },
  {
    location: {
      latitude: 37.785834,
      longitude: -122.406417,
      postAddress: {
        street: 'Stockton St',
        city: 'Сан-Франциско',
        country: 'Сполучені Штати Америки',
        region: 'CA',
        district: 'Union Square',
      },
    },
    photoUri:
      'file:///Users/sergiimisyuk/Library/Developer/CoreSimulator/Devices/0A5769BA-577D-404B-8727-6E0407760A36/data/Containers/Data/Application/C5A38197-ABA3-4E1B-B570-0AA80041BAEC/Library/Caches/ExponentExperienceData/%2540anonymous%252FMyPain-fc1e4b88-0b84-4949-ae78-6c3d5dad91e3/Camera/574A3359-8CA3-4DBD-B9B8-42230AE1AA82.jpg',
    titlePost: '',
  },
];
