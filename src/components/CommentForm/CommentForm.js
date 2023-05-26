import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectStateLogin } from '../../../redux/selectors';

import { db } from '../../../firebase/config';
import {
  setDoc,
  doc,
  Timestamp,
} from 'firebase/firestore';
import {
  View,

  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styles } from './CommentForm.styles';

export const CommentForm = ({ postId, isShowKeyboard, setIsShowKeyboard }) => {
  const login = useSelector(selectStateLogin);
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
        login,
        createdAt: Timestamp.fromDate(new Date()),
        updatedAt: Timestamp.fromDate(new Date()),
      });

      setMyComment('');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
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
    </View>
  );
};
