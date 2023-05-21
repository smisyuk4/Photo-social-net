import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { signup } from '../../../redux/auth/authReducer';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import { styles } from './RegisterForm.styles';

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
};

export const RegisterForm = ({
  isShowKeyboard,
  setIsShowKeyboard,
  hideKeyboard,
  navigation,
}) => {
  const [state, setState] = useState({ ...INITIAL_STATE });
  const dispatch = useDispatch()

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

  // password
  const [isShowPassword, setIsShowPassword] = useState(true);

  const toggleShowPassword = () => {
    setIsShowPassword(prevState => !prevState);
  };

  const submit = () => {
    console.log(state);
    hideKeyboard();
    dispatch(signup(state))
    setState(INITIAL_STATE);
    //  navigation.navigate('Home', {}
  };

  return (
    <TouchableWithoutFeedback onPress={() => hideKeyboard()}>
      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View
          style={{ ...styles.form, paddingBottom: isShowKeyboard ? 32 : 92 }}
        >
          <View style={styles.avatar}>
            <TouchableOpacity style={styles.buttonAvatar} onPress={() => {}}>
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
            <TouchableOpacity
              style={styles.buttonForm}
              onPress={submit}
            >
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
