import { View, Text, TouchableOpacity, TextInput, Button, StyleSheet } from "react-native";

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
                placeholder="Пароль"/>
            <Button title="Зареєструватись"/>
            </View>
            
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
        fontSize: 30,
        fontWeight: 500,
    },
    formContainer: {
        // resizeMode: 'cover'
        justifyContent: 'center',
        //  marginHorizontal: 16,
        // width: 500,
        // paddingHorizontal: 16,
    },
    input: {
        // alignItems: 'flex-start',
    //    justifyContent: 'space-between',
        marginHorizontal: 16,
        marginBottom: 16,
        padding: 16,
        height: 50,
        fontSize: 16,
        // fontWeight: 400,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#E8E8E8",
        backgroundColor: "#F6F6F6",
    }
})