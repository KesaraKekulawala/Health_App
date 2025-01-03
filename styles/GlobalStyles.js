import { Linking } from "react-native";
import { StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#F5F5F5', // Light background
    },
    
    authcontainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#F5F5F5', // Light background
    },

    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },

    appName: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#2196F3', 
      marginBottom: 20,
      textAlign: 'center',
    },

    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      paddingHorizontal: 10,
      marginTop: 40,
    },

    Homeheader: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#00897B', // Teal
    },
    
    header: {
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
      color: '#00897B', // Teal
    },

    logoutButton: {
      backgroundColor: '#00897B', // Logout button background color
      borderRadius: 15,
      padding: 10
      ,
    },

    card: {
      padding: 15,
      backgroundColor: '#FFFFFF', // White cards
      borderRadius: 10,
      marginBottom: 10,
      marginTop:7,
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
      width: 90,
      height: 60,
      borderRadius: 15,
      marginLeft: 10,
    },
    floatingText: {
      fontSize: 18,
      color: '#FFFFFF', // White text
    },
    navSentence: {
        flexDirection: 'row',
        color: '#00897B',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
      
    },
    LinktoNext: {
      paddingTop: 5,
      color: '#2196F3',
      fontSize: 16,
      fontWeight: 'bold',
      
    },

    
    input: {
      width:"100%",
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