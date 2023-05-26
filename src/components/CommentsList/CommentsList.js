import { View, Text, FlatList } from 'react-native';
import { dateConverter } from '../../helpers/dateConverter';
import { styles } from './CommentsList.styles';

export const CommentsList = ({ allComments }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={allComments}
        keyExtractor={({ id }) => id}
        renderItem={({ item: { login, comment, createdAt } }) => (
          <>
            <View style={{ borderWidth: 1, borderColor: 'red' }}>
              <Text>login: {login}</Text>
              <Text>comment: {comment}</Text>
              {createdAt && <Text>createdAt: {dateConverter(createdAt)}</Text>}
            </View>
          </>
        )}
      />
    </View>
  );
};
