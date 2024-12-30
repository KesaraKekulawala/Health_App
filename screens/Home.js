import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import { MaterialIcons } from '@expo/vector-icons';
import GlobalStyles from '../styles/GlobalStyles';

export default function Home({ route, navigation }) {
  const { username } = route.params;
  const [healthData, setHealthData] = useState([]);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/countries')
      .then(response => response.json())
      .then(data => setHealthData(data.slice(0, 200)))
      .catch(error => console.error('Error fetching health data:', error));
  }, []);

  const handleItemClick = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  const handleLogout = () => {
    navigation.navigate('Login'); // Redirect to login page
  };

  return (
    <View style={GlobalStyles.container}>
      <View style={GlobalStyles.headerContainer}>
        <Text style={GlobalStyles.Homeheader}>Welcome, {username} 😷</Text>
        <TouchableOpacity style={GlobalStyles.logoutButton} onPress={handleLogout}>
          <MaterialIcons name="logout" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      
      
      <FlatList
        data={healthData}
        keyExtractor={(item) => item.country}
        renderItem={({ item }) => (
          <TouchableOpacity style={GlobalStyles.card} onPress={handleItemClick}>
            <View style={GlobalStyles.cardContent}>
              <View style={GlobalStyles.cardText}>
                <Text style={GlobalStyles.title}>{item.country}</Text>
                <Text style={GlobalStyles.body}>Cases: {item.cases}</Text>
                <Text style={GlobalStyles.body}>Deaths: {item.deaths}</Text>
                <Text style={GlobalStyles.body}>Recovered: {item.recovered}</Text>
              </View>
              <Image source={{ uri: item.countryInfo.flag }} style={GlobalStyles.flag} />
            </View>
          </TouchableOpacity>
        )}
      />
      <FloatingAction
        actions={[]}
        floatingIcon={<Text style={GlobalStyles.floatingText}>{clickCount}</Text>}
        onPressMain={() => {}}
      />
    </View>
  );
}