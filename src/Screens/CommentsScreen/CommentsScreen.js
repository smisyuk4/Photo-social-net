import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectStateLogin } from '../../../redux/selectors';

import { db } from '../../../firebase/config';
import {
  setDoc,
  doc,
  updateDoc,
  arrayUnion,
  collection,
  onSnapshot,
} from 'firebase/firestore';

import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import { MaterialIcons, Feather, AntDesign } from '@expo/vector-icons';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CommentsList } from '../../componets/CommentsList/CommentsList';
import { styles } from './CommentsScreen.styles';

export const CommentsScreen = ({ navigation, route }) => {
  const { id: postId } = route.params;
  const login = useSelector(selectStateLogin);
  const [myComment, setMyComment] = useState('');
  const [allComments, setAllComments] = useState([]);

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isActiveInput, setIsActiveInput] = useState(false);

  const hideKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleInputFocus = () => {
    setIsActiveInput(true);
  };

  const handleInputBlur = () => {
    setIsActiveInput(false);
  };

  const sendComment = async () => {
    const uniqueCommentId = Date.now().toString();
    try {
      const postRef = doc(db, 'posts', postId, 'comments', uniqueCommentId);

      await setDoc(postRef, {
        comment: myComment,
        login,
      });

      setMyComment('');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const commentsRef = collection(db, 'posts', postId, 'comments');

    onSnapshot(commentsRef, data => {
      setAllComments(
        data.docs.map(comment => ({ id: comment.id, ...comment.data() }))
      );
    });
  }, []);

  console.log('allComments ', allComments);

  return (
    <TouchableWithoutFeedback onPress={() => hideKeyboard()}>
      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* main content */}
        <View style={styles.container}>
          <View
            style={{
              paddingVertical: isShowKeyboard ? hp('0.96%') : hp('3.8%'),
              gap: isShowKeyboard ? hp('0.48%') : hp('1.92%'),
            }}
          >
            {/* list */}
            <CommentsList allComments={allComments} />

            {/* form */}
            <TextInput
              style={{
                ...styles.input,
                borderBottomColor: isActiveInput ? '#FF6C00' : '#E8E8E8',
              }}
              value={myComment}
              onChangeText={value => setMyComment(value)}
              onFocus={() => {
                setIsShowKeyboard(true);
                handleInputFocus('comment');
              }}
              onBlur={() => handleInputBlur('comment')}
              inputMode="text"
              placeholder="Коментар..."
            />
          </View>
        </View>

        {/* buttons */}
        <View
          style={
            !isShowKeyboard
              ? { ...styles.buttonsWrp }
              : {
                  ...styles.buttonsWrp,
                  flexDirection: 'row-reverse',
                  marginTop: hp('5%'),
                }
          }
        >
          <TouchableOpacity
            style={
              !myComment
                ? styles.buttonForm
                : { ...styles.buttonForm, ...styles.activeButtonForm }
            }
            onPress={sendComment}
            disabled={!myComment}
            // disabled={myComment === '' ? true : false}
          >
            <Text
              style={
                !myComment
                  ? styles.buttonFormText
                  : { ...styles.buttonFormText, ...styles.activeButtonFormText }
              }
            >
              Опублікувати
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
