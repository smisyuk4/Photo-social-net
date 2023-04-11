import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";

export const RegisterForm = ()=> {
    return (
        <View style={styles.registerForm}>
            <View style={styles.avatar}>
                <TouchableOpacity style={styles.buttonAvatar} onPress={() => {}}>
                    <Text style={styles.buttonAvatarText}>{"+"}</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.title}>Реєстрація</Text>

            <View style={styles.formContainer}>
                <TextInput 
                    style={styles.input} 
                    onChangeText={() => {}}
                    // value={""}
                    placeholder="Логін"/>

                <TextInput 
                    style={styles.input} 
                    onChangeText={() => {}}
                    // value={""}
                    placeholder="Адреса електронної пошти"/>

                <TextInput 
                    style={styles.input} 
                    onChangeText={() => {}}
                    // value={""}
                    placeholder="Пароль"
                    secureTextEntry={true}/>

                <TouchableOpacity style={styles.buttonForm} onPress={() => {}}>
                    <Text style={styles.buttonFormText}>{"Зареєструватись"}</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.link}>Вже є аккаунт? Увіти</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    registerForm: {
        alignItems: "center",
        height: 549,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: "#fff"
    },
    avatar: {
        marginBottom: 32,
        alignItems: 'flex-end',
        justifyContent: "flex-end",
        top: -60,
        height: 120,
        width: 120,
        borderRadius: 16,
        backgroundColor: "#F6F6F6",
    },
    buttonAvatar: {
        alignItems: "center",
        justifyContent: "center",
        top: -14,
        right: -13,
        height: 25,
        width: 25,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#FF6C00",
        backgroundColor: "#ffffff"
    },
    buttonAvatarText: {
        color: "#FF6C00",
    },
    title: {
        marginBottom: 33,
        top: -60,
        fontSize: 30,
        fontWeight: 500,
        lineHeight: 35,
    },
    formContainer: {
        marginBottom: 16,
        top: -60,
        alignSelf: 'stretch',
        paddingHorizontal: 16,
    },
    input: {
        marginBottom: 16,
        padding: 16,
        height: 50,
        fontSize: 16,
        lineHeight: 19,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#E8E8E8",
        backgroundColor: "#F6F6F6",
    },
    buttonForm: {
        marginTop: 27,
        height: 51,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: "#FF6C00"
    },
    buttonFormText: {
        alignItems: 'center',
        fontSize: 16,
        lineHeight: 19,
        color: '#fff',
    },
    link: {
        top: -60,
        fontSize: 16,
        lineHeight: 19,
        color: '#1B4371',
    }
})