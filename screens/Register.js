import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function Register ({ navigation }){
    const [ username, setUsername] = useState('');
    const [ password, setPassword] = useState('');

    const handleRegister = () => {
        if (username && password){
            Alert.alert('Registration Successfull');
            navigation.navigate('Login');
        } else {
            Alert.alert('Please fill in all fields');
        }
    };

    return (
        <View style={styles.container}> 
        <Text style = {styles.title}>Register</Text>
        <TextInput 
            style = {styles.input} 
            placeholder = "Username" 
            value = {username} 
            onChangeText = {setUsername}
        />
        <TextInput 
            style = {styles.input} 
            placeholder = "Password" 
            secureTextEntry
            value = {password} 
            onChangeText = {setPassword}
        />

        <Button title='Register' onPress={handleRegister} />
        
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign:'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
    },
});