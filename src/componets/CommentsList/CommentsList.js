import { View, Text, FlatList } from 'react-native';
import { styles } from './CommentsList.styles';

export const CommentsList = ({allComments}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={allComments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <>
            <View style={{borderWidth: 1, borderColor: 'red'}}>
				<Text>login: {item.login}</Text>
				<Text>comment: {item.comment}</Text>
			</View>
          </>
        )}
      />
    </View>
  );
};
