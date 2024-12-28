const GlobalStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#F5F5F5', // Light background
    },
    header: {
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
      color: '#00897B', // Teal
    },
    card: {
      padding: 15,
      backgroundColor: '#FFFFFF', // White cards
      borderRadius: 10,
      marginBottom: 10,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      borderWidth: 1, // Border added
      borderColor: '#00897B', // Teal border color
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
      fontSize: 18,
      fontWeight: 'bold',
      color: '#4CAF50', // Green for titles
    },
    body: {
      marginTop: 5,
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
      color: '#FFFFFF', // White text
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      marginBottom: 20,
      borderRadius: 5,
      backgroundColor: '#f9f9f9',
    },
    button: {
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
      marginBottom: 10,
    },
    loginButton: {
      backgroundColor: '#4CAF50',
    },
    registerButton: {
      backgroundColor: '#2196F3',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  
  export default GlobalStyles;
  