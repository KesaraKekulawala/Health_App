import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import { MaterialIcons } from '@expo/vector-icons';

export default function Register({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const handleRegister = () => {
    if (!username || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    Alert.alert('Registration Successful');
    navigation.navigate('Login');
  };

  return (
    <View style={GlobalStyles.authcontainer}>
      <Text style={GlobalStyles.appName}>Corona Track</Text>
      <Text style={GlobalStyles.header}>Register</Text>
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
        <View style={{ position: 'relative'}}>
          <TextInput
            style={[GlobalStyles.input, { paddingRight: 40 }]}
            placeholder="Confirm Password"
            secureTextEntry={showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity
            style={{ position: 'absolute', right: 10, top: 10 }}
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <MaterialIcons
              name={showConfirmPassword ? 'visibility-off' : 'visibility'}
              size={24}
              color="#555"
            />
          </TouchableOpacity>
        </View>
      <TouchableOpacity style={[GlobalStyles.button, GlobalStyles.registerButton]} onPress={handleRegister}>
        <Text style={GlobalStyles.buttonText}>Register</Text>
      </TouchableOpacity>
      <Text style={GlobalStyles.navSentence}>
        Already have an Account?{' '}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={GlobalStyles.LinktoNext}> Login</Text>
      </TouchableOpacity>
      </Text>
    </View>
  );
}
