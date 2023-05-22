import { View, Text, Button} from 'react-native';
import { styles } from './ProfileScreen.styles';
import { useDispatch } from 'react-redux';
import { authSignOutUser } from '../../../redux/auth/authOperations';
export const ProfileScreen = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>ProfileScreen component</Text>
      <Button title='signOut' onPress={()=>dispatch(authSignOutUser())}/>
    </View>
  );
};
