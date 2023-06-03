import { useSelector } from 'react-redux';
import { selectStateLogin } from '../../../redux/selectors';
import { View, Text, Image } from 'react-native';
import { dateConverter } from '../../helpers/dateConverter';
import { styles } from './Comment.styles';

export const Comment = ({
  item: {
    owner: { login, avatar },
    comment,
    createdAt,
  },
}) => {
  const myLogin = useSelector(selectStateLogin);

  return (
    <View
      style={
        myLogin === login
          ? { ...styles.container }
          : { ...styles.container, flexDirection: 'row' }
      }
    >
      <View style={styles.avatarWrp}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
      </View>
      <View style={styles.commentWrp}>
        <Text style={styles.comment}>{comment}</Text>
        <Text style={styles.date}>{dateConverter(createdAt)}</Text>
      </View>
    </View>
  );
};
