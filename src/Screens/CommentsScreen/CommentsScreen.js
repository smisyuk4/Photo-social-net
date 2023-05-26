import { useState, useEffect } from 'react';

import { db } from '../../../firebase/config';
import { collection, onSnapshot } from 'firebase/firestore';

import {
  View,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CommentsList } from '../../components/CommentsList/CommentsList';
import { CommentForm } from '../../components/CommentForm/CommentForm';
import { styles } from './CommentsScreen.styles';

export const CommentsScreen = ({ navigation, route }) => {
  const { id: postId } = route.params;
  const [allComments, setAllComments] = useState([]);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  useEffect(() => {
    const commentsRef = collection(db, 'posts', postId, 'comments');

    onSnapshot(commentsRef, data => {
      setAllComments(
        data.docs.map(comment => ({ id: comment.id, ...comment.data() }))
      );
    });
  }, []);

  const hideKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

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
            <CommentsList allComments={allComments} />
          </View>

          {/* bottom form */}
          <View style={styles.bottomSection}>
            <CommentForm
              postId={postId}
              isShowKeyboard={isShowKeyboard}
              setIsShowKeyboard={setIsShowKeyboard}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
