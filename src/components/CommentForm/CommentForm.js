import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectStateLogin, selectStateAvatar } from '../../../redux/selectors';
import { addComment } from '../../../redux/post/postReducer';

import { db } from '../../../firebase/config';
import { setDoc, doc, Timestamp } from 'firebase/firestore';
import { View, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styles } from './CommentForm.styles';

export const CommentForm = ({
  postId,
  isShowKeyboard,
  setIsShowKeyboard,
  hideKeyboard,
}) => {
  const dispatch = useDispatch();
  const login = useSelector(selectStateLogin);
  const avatar = useSelector(selectStateAvatar);
  const [myComment, setMyComment] = useState('');
  const [isActiveInput, setIsActiveInput] = useState(false);

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
        owner:{
          login,
          avatar,
        },
        createdAt: Timestamp.fromDate(new Date()),
        updatedAt: Timestamp.fromDate(new Date()),
      });
      setMyComment('');
      dispatch(addComment(myComment));
    } catch (error) {
      console.log(error);
    } finally {
      hideKeyboard();
    }
  };

  return (
    <View
      style={
        isShowKeyboard
          ? {
              ...styles.formWrp,
              paddingBottom: hp('12%'),
            }
          : styles.formWrp
      }
    >
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
        onBlur={() => {
          handleInputBlur('comment');
          hideKeyboard();
        }}
        inputMode="text"
        placeholder="Коментар..."
        multiline={true}
        maxLength={200}
        numberOfLines={5}
      />

      <TouchableOpacity
        style={
          !myComment
            ? styles.buttonForm
            : { ...styles.buttonForm, ...styles.activeButtonForm }
        }
        onPress={sendComment}
        disabled={!myComment}
      >
        <FontAwesome
          name="send"
          size={24}
          color={
            !myComment ? styles.buttonForm.fill : styles.activeButtonForm.fill
          }
        />
      </TouchableOpacity>
    </View>
  );
};
