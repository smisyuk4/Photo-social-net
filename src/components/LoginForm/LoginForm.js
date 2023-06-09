import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authSignInUser } from '../../../redux/auth/authOperations';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LoaderScreen } from '../../Screens/LoaderScreen';
import { styles } from './LoginForm.styles';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export const LoginForm = ({
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

  const submit = () => {
    setIsShowLoader(true);
    hideKeyboard();
    dispatch(authSignInUser(state)).then(data => {
      if (data === undefined || !data.user) {
        setIsShowLoader(false);
        Alert.alert('Вхід не виконано!', `Помилка: ${data}`);
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
            paddingBottom: isShowKeyboard ? hp('2%') : hp('15%'),
          }}
        >
          <Text style={styles.title}>Вхід</Text>

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
              <Text style={styles.buttonFormText}>{'Вхід'}</Text>
            </TouchableOpacity>

            <Text
              style={styles.link}
              onPress={() => navigation.navigate('Registration')}
            >
              Немає аккаунта? Зареєструватись
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
