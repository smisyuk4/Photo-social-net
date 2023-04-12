import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Platform, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from "react-native";
import { styles } from "./RegistrationScreen.styles";

const INITIAL_STATE = {
    login: '',
    email: '',
    password: '',
}

export const RegisterForm = ({isShowKeyboard, setIsShowKeyboard, hideKeyboard})=> {
    const [state, setState] = useState({...INITIAL_STATE})

    const submit = ()=>{
        console.log(state)
        setState(INITIAL_STATE)
        hideKeyboard()
    }

    return (
        <TouchableWithoutFeedback onPress={()=>hideKeyboard()}>
            <KeyboardAvoidingView 
                style={styles.wrapper}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={{...styles.form, paddingBottom: isShowKeyboard ? 32 : 92}}>
                    <View style={styles.avatar}>
                        <TouchableOpacity style={styles.buttonAvatar} onPress={() => {}}>
                            <Text style={styles.buttonAvatarText}>{"+"}</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.title}>Реєстрація</Text>

                    <TextInput 
                        inputMode="text"
                        style={styles.input} 
                        onFocus={()=>setIsShowKeyboard(true)}
                        onSubmitEditing={submit}
                        onChangeText={(value)=>setState((prev)=>({...prev, login: value}))}
                        value={state.login}
                        placeholder="Логін"
                    />

                    <TextInput 
                        inputMode="email"
                        style={styles.input} 
                        onFocus={()=>setIsShowKeyboard(true)}
                        onSubmitEditing={submit}
                        onChangeText={(value)=>setState((prev)=>({...prev, email: value}))}
                        value={state.email}
                        placeholder="Адреса електронної пошти"
                    />

                    <TextInput 
                        inputMode="text"
                        style={styles.input} 
                        onFocus={()=>setIsShowKeyboard(true)}
                        onSubmitEditing={submit}
                        onChangeText={(value)=>setState((prev)=>({...prev, password: value}))}
                        value={state.password}
                        placeholder="Пароль"
                        secureTextEntry={true}
                    />
                    
                    <View  style={{display: isShowKeyboard ? 'none' : 'flex'}}>
                        <TouchableOpacity 
                            style={styles.buttonForm} 
                        >
                            <Text style={styles.buttonFormText}>{"Зареєструватись"}</Text>
                        </TouchableOpacity>
                
                        <Text style={styles.link}>Вже є аккаунт? Увіти</Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}
