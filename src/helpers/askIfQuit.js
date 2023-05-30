import { authSignOutUser } from '../../redux/auth/authOperations';
import { Alert } from 'react-native';

export const askIfQuit = (dispatch, unsubscribe) => {
  console.log(unsubscribe)
  Alert.alert('Увага!', 'Вихід з додатку', [
    {
      text: 'Відмінити',
      onPress: () => console.log('Cancel Pressed'),
      // style: 'cancel',
    },
    {
      text: 'Добре',
      onPress: () => {
        unsubscribe()
        dispatch(authSignOutUser());
      },
    },
  ]);
};
