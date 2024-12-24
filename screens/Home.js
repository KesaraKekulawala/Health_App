import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';

export default function Home({ route }) {
  const { username } = route.params;
  const [healthData, setHealthData] = useState([]);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    // Fetch data from Disease.sh API (COVID-19 statistics by country)
    fetch('https://disease.sh/v3/covid-19/countries')
      .then(response => response.json())
      .then(data => setHealthData(data.slice(0, 10))) // Limit to 10 items
      .catch(error => console.error('Error fetching health data:', error));
  }, []);

  const handleItemClick = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome, {username}</Text>
      <FlatList
        data={healthData}
        keyExtractor={(item) => item.country}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={handleItemClick}>
            <View style={styles.cardContent}>
              <View style={styles.cardText}>
                <Text style={styles.title}>{item.country}</Text>
                <Text style={styles.body}>Cases: {item.cases}</Text>
                <Text style={styles.body}>Deaths: {item.deaths}</Text>
                <Text style={styles.body}>Recovered: {item.recovered}</Text>
              </View>
              <Image source={{ uri: item.countryInfo.flag }} style={styles.flag} />
            </View>
          </TouchableOpacity>
        )}
      />
      <FloatingAction
        actions={[]}
        floatingIcon={<Text style={styles.floatingText}>{clickCount}</Text>}
        onPressMain={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardText: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  body: {
    marginTop: 10,
    fontSize: 14,
    color: '#555',
  },
  flag: {
    width: 50,
    height: 30,
    borderRadius: 5,
    marginLeft: 10,
  },
  floatingText: {
    fontSize: 18,
    color: '#fff',
  },
});
