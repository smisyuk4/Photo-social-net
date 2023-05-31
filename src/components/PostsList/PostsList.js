import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSignOutUser } from '../../../redux/auth/authOperations';
import {
  selectStateLogin,
  selectStateEmail,
  selectStateAvatar,
  selectorStateComment,
} from '../../../redux/selectors';
import { db } from '../../../firebase/config';
import { collection, onSnapshot } from 'firebase/firestore';
import { View, Text, FlatList, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LoaderScreen } from '../../Screens/LoaderScreen';
import { Post } from '../Post';
import { askIfQuit } from '../../helpers/askIfQuit';
import { styles } from './PostsList.styles';

export const PostsList = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [isShowLoader, setIsShowLoader] = useState(false);
  const [posts, setPosts] = useState([]);
  const login = useSelector(selectStateLogin);
  const email = useSelector(selectStateEmail);
  const avatar = useSelector(selectStateAvatar);
  const comment = useSelector(selectorStateComment);

  useEffect(() => {
    setIsShowLoader(true);
    const dbRef = collection(db, 'posts');

    onSnapshot(
      dbRef,
      data => {
        setPosts(data.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        setIsShowLoader(false);
      },
      () => {}
    );

    navigation.setOptions({
      headerRight: () => (
        <Feather
          name="log-out"
          size={24}
          color={styles.headerExitBtn.color}
          onPress={() => {
            askIfQuit(dispatch);
          }}
        />
      ),
    });
  }, [navigation, comment]);

  if (isShowLoader) {
    return <LoaderScreen />;
  }

  if (posts.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Ще ніхто не зробив фотознімки</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={({ id }) => id}
        renderItem={({ item, index }) => (
          <>
            {index === 0 && (
              <User login={login} email={email} avatar={avatar} />
            )}
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
      <Image style={styles.userPhoto} source={{ uri: avatar }} />
      <View style={styles.userInfoWrp}>
        <Text style={styles.userName}>{login}</Text>
        <Text style={styles.userEmail}>{email}</Text>
      </View>
    </View>
  );
};
