import { View, FlatList, Image } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Comment } from '../Comment';
import { styles } from './CommentsList.styles';

export const CommentsList = ({ allComments, photo }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={allComments}
        keyExtractor={({ id }) => id}
        renderItem={({ item, index }) => (
          <>
            {index === 0 && (
              <Image source={{ uri: photo }} style={styles.photo} />
            )}

            <Comment item={item} />
          </>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        ListFooterComponent={<View style={{height: hp('8%')}}/>}
      />
    </View>
  );
};
