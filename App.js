import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  const [screen, setScreen] = useState('Login');

  return (
    <SafeAreaView style={Styles.container}>
      {screen == 'Login' ? (
        <LoginScreen
          Screen={val => {
            setScreen(val);
          }}
        />
      ) : screen == 'Home' ? (
        <HomeScreen
          Screen={val => {
            setScreen(val);
          }}
        />
      ) : null}
    </SafeAreaView>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    backgroundColor: 'red',
  },
});
