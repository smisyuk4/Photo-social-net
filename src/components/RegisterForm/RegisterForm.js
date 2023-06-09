import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authSignUpUser } from '../../../redux/auth/authOperations';
import { myStorage } from '../../../firebase/config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LoaderScreen } from '../../Screens/LoaderScreen';
import { ImageManipulator } from '../../helpers';
import { styles } from './RegisterForm.styles';

const INITIAL_STATE = {
  login: null,
  email: null,
  password: null,
  avatarUri: null,
};

export const RegisterForm = ({
  isShowKeyboard,
  setIsShowKeyboard,
  hideKeyboard,
  navigation,
}) => {
  const [state, setState] = useState({ ...INITIAL_STATE });
  const [isShowLoader, setIsShowLoader] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(true);
  const dispatch = useDispatch();

  // border
  const [isActiveInput, setIsActiveInput] = useState({
    login: false,
    email: false,
    password: false,
  });

  const handleInputFocus = textInput => {
    setIsActiveInput({
      [textInput]: true,
    });
  };

  const handleInputBlur = textInput => {
    setIsActiveInput({
      [textInput]: false,
    });
  };

  const toggleShowPassword = () => {
    setIsShowPassword(prevState => !prevState);
  };

  const pickImage = async () => {
    try {
      const { assets, canceled } = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!canceled) {
        const [{ uri }] = assets;

        const newUri = await ImageManipulator(
          uri,
          [
            {
              resize: { height: 240, width: 240 },
            },
          ],
          0.5
        );

        setState(prev => ({ ...prev, avatarUri: newUri }));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const uploadPhotoToServer = async () => {
    const uniquePostId = Date.now().toString();

    try {
      const response = await fetch(state.avatarUri);

      const file = await response.blob();

      const imageRef = ref(myStorage, `userAvatars/${uniquePostId}`);

      await uploadBytes(imageRef, file);

      const link = await getDownloadURL(imageRef);

      return link;
    } catch (error) {
      console.log('uploadPhotoToServer =====>> ', error);
      Alert.alert(
        'Вибачте, але фото не зберіглось на сервері',
        error.message
      );
    }
  };

  const submit = async () => {
    setIsShowLoader(true);
    hideKeyboard();

    let photo;
    if (state.avatarUri) {
      photo = await uploadPhotoToServer();
    } else {
      photo =
        'https://firebasestorage.googleapis.com/v0/b/rn-imagelibrary.appspot.com/o/userAvatars%2F%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202023-06-03%20%D0%BE%2015.01.32.png?alt=media&token=271ad0cf-ff14-46b4-8125-85e9aaed16f5';
    }

    dispatch(authSignUpUser({ ...state, photo })).then(data => {
      if (data === undefined || !data.uid) {
        setIsShowLoader(false);
        Alert.alert('Реєстрацію не виконано!', `Помилка: ${data}`);
      }
    });
  };

  if (isShowLoader) {
    return <LoaderScreen />;
  }

  return (
    <TouchableWithoutFeedback onPress={() => hideKeyboard()}>
      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View
          style={{
            ...styles.form,
            paddingBottom: isShowKeyboard ? hp('2%') : hp('9%'),
          }}
        >
          <View style={styles.avatarContainer}>
            <View style={styles.avatarWrp}>
              <Image
                source={{ uri: state.avatarUri }}
                style={styles.avatarImg}
              />
            </View>

            <TouchableOpacity style={styles.buttonAvatar} onPress={pickImage}>
              <Text style={styles.buttonAvatarText}>{'+'}</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>Реєстрація</Text>

          <TextInput
            inputMode="text"
            placeholder="Логін"
            value={state.login}
            style={{
              ...styles.input,
              borderColor: isActiveInput.login ? '#FF6C00' : '#E8E8E8',
            }}
            onFocus={() => {
              setIsShowKeyboard(true);
              handleInputFocus('login');
            }}
            onBlur={() => handleInputBlur('login')}
            onSubmitEditing={submit}
            onChangeText={value =>
              setState(prev => ({ ...prev, login: value }))
            }
          />

          <TextInput
            inputMode="email"
            placeholder="Адреса електронної пошти"
            value={state.email}
            style={{
              ...styles.input,
              borderColor: isActiveInput.email ? '#FF6C00' : '#E8E8E8',
            }}
            onFocus={() => {
              setIsShowKeyboard(true);
              handleInputFocus('email');
            }}
            onBlur={() => handleInputBlur('email')}
            onSubmitEditing={submit}
            onChangeText={value =>
              setState(prev => ({ ...prev, email: value }))
            }
          />

          <View>
            <TouchableOpacity
              style={styles.buttonPassword}
              onPress={() => toggleShowPassword()}
            >
              <Text style={styles.buttonPasswordText}>
                {isShowPassword ? 'Показати' : 'Сховати'}
              </Text>
            </TouchableOpacity>

            <TextInput
              inputMode="text"
              placeholder="Пароль"
              secureTextEntry={isShowPassword}
              value={state.password}
              style={{
                ...styles.input,
                borderColor: isActiveInput.password ? '#FF6C00' : '#E8E8E8',
                paddingRight: 100,
              }}
              onFocus={() => {
                setIsShowKeyboard(true);
                handleInputFocus('password');
              }}
              onBlur={() => handleInputBlur('password')}
              onSubmitEditing={submit}
              onChangeText={value =>
                setState(prev => ({ ...prev, password: value }))
              }
            />
          </View>

          <View style={{ display: isShowKeyboard ? 'none' : 'flex' }}>
            <TouchableOpacity style={styles.buttonForm} onPress={submit}>
              <Text style={styles.buttonFormText}>{'Зареєструватись'}</Text>
            </TouchableOpacity>

            <Text
              style={styles.link}
              onPress={() => navigation.navigate('Login')}
            >
              Вже є аккаунт? Увіти
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
