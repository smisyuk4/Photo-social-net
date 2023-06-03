// import { useState } from 'react';
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
  // const [isShowLogin, setIsShowLogin] = useState(false);

  const trimLogin = login.slice(0, 2);

  return (
    <View
      style={
        myLogin === login
          ? { ...styles.container }
          : { ...styles.container, flexDirection: 'row' }
      }
    >
      <View style={styles.avatarWrp}>
        {/* {!isShowLogin && <Text style={{...styles.login, opacity: fadeAnim}}>{trimLogin}</Text>} */}

        <Image
          source={{ uri: avatar }}
          style={styles.avatar}
        />
      </View>
      <View style={styles.commentWrp}>
        <Text style={styles.comment}>{comment}</Text>
        <Text style={styles.date}>{dateConverter(createdAt)}</Text>
      </View>
    </View>
  );
};
