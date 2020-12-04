import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

export default function RegisterForm() {
  return (
    <View style={styles.regForm}>
        <Text style={styles.header}>Register</Text>
        <TextInput style={styles.input} placeholder= "Full Name" autoFocus />
        <TextInput style={styles.input} placeholder= "Email" />
        <TextInput style={styles.input} placeholder= "Phone" keyboardType="numeric" />
        <TextInput style={styles.input} placeholder= "Password" secureTextEntry={true} />

        <TouchableOpacity style={styles.buttom}>
            <Text style={styles.buttomTxt}>Sign up</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    regForm: {
        alignSelf: 'stretch',
        paddingLeft: 40,
        paddingRight: 40
    },
    header: {
        borderBottomColor: '#00acc1',
        borderBottomWidth: 1,
        paddingBottom: 10,
        marginBottom: 10,
        fontSize: 20
    },
    input: {
        padding: 30,
        marginBottom: 10,
        borderColor: '#00acc1',
        borderWidth: 1
    },
    buttom: {
        backgroundColor: '#00acc1',
        alignItems: 'center',
        padding: 30
    },
    buttomTxt: {
        color: '#fff',
        fontWeight: 'bold'
    }
}); 
