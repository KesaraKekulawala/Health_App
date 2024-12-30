import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import { MaterialIcons } from '@expo/vector-icons';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  const handleLogin = () => {
    if (username && password) {
      navigation.navigate('Home', { username });
    } else {
      Alert.alert('Error', 'Please fill all fields');
    }
  };

  return (
    
    <View style={GlobalStyles.authcontainer}>
      <Text style={GlobalStyles.appName}>Corona Track</Text>
      <Text style={GlobalStyles.header}>Login</Text>
      <TextInput
        style={GlobalStyles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <View style={{ position: 'relative'}}>
          <TextInput
            style={[GlobalStyles.input, { paddingRight: 40 }]}
            placeholder="Password"
            secureTextEntry={showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={{ position: 'absolute', right: 10, top: 10 }}
            onPress={() => setShowPassword(!showPassword)}
          >
            <MaterialIcons
              name={showPassword ? 'visibility-off' : 'visibility'}
              size={24}
              color="#555"
            />
          </TouchableOpacity>
        </View>
      <TouchableOpacity style={[GlobalStyles.button, GlobalStyles.loginButton]} onPress={handleLogin}>
        <Text style={GlobalStyles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={GlobalStyles.navSentence}>Don't have an Account? 
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={GlobalStyles.LinktoNext}>   Register</Text>
          </TouchableOpacity>
      </Text>
      {/* <TouchableOpacity
        style={[GlobalStyles.button, GlobalStyles.registerButton]}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={GlobalStyles.buttonText}>Register</Text>
      </TouchableOpacity> */}
    </View>
  );
}