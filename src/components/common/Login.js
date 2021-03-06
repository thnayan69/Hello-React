import React, { useState, useContext, useEffect  } from 'react';
import {
    Text,
    TextInput,
    View,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar,
    StyleSheet,
    ActivityIndicator,
  } from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';

const Login = () => {
    const { authCheck } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = () => {
        // e.preventDefault();
        authCheck(username, password);
        setUsername('');
        setPassword('');
    }

    return(
        <KeyboardAvoidingView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/45/AIUB_whole_logo.png/160px-AIUB_whole_logo.png', }} />
          <Text style={styles.title}>
            American International University - Bangladesh
          </Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput placeholder="Username"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.textInput}
            defaultValue={username}
            onChangeText={text => setUsername(text)} />
          <TextInput placeholder="Password"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="go"
            secureTextEntry={true}
            style={styles.textInput}
            defaultValue={password}
            onChangeText={text => setPassword(text)} />
          <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(94,92,230,1.0)',
    },
    logoContainer: {
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center',
    },
    logo: {
      height: 100,
      width: 100,
      marginBottom: 10,
    },
    title: {
      color: '#FFF',
      fontSize: 16,
      marginTop: 10,
      width: 200,
      textAlign: 'center',
      opacity: 0.9,
    },
    buttonContainer: {
      backgroundColor: 'rgba(88,86,214,1.0)',
      paddingVertical: 15,
      marginBottom: 20,
      shadowColor: 'white',
    },
    buttonText: {
      textAlign: 'center',
      color: '#FFFFFF',
      fontWeight: '700',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: '#E91E63',
    },
    reactLogo: {
      height: 50,
      width: 50,
      marginTop: 150,
      marginBottom: 50,
    },
    textInput: {
      height: 40,
      width: 300,
      backgroundColor: 'rgba(255,255,255,0.1)',
      color: '#FFF',
      borderWidth: 0,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
  });
  
export default Login;