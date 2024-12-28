import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';

export default function Register({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (username && password) {
      Alert.alert('Registration Successful');
      navigation.navigate('Login');
    } else {
      Alert.alert('Please fill in all fields');
    }
  };

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.header}>Register</Text>
      <TextInput
        style={GlobalStyles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={GlobalStyles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={[GlobalStyles.button, GlobalStyles.registerButton]} onPress={handleRegister}>
        <Text style={GlobalStyles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
