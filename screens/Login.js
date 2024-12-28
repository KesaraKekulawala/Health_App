import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      navigation.navigate('Home', { username });
    } else {
      Alert.alert('Error', 'Please fill all fields');
    }
  };

  return (
    <View style={GlobalStyles.authcontainer}>
      <Text style={GlobalStyles.header}>Login</Text>
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
      <TouchableOpacity style={[GlobalStyles.button, GlobalStyles.loginButton]} onPress={handleLogin}>
        <Text style={GlobalStyles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[GlobalStyles.button, GlobalStyles.registerButton]}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={GlobalStyles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}