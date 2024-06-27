import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


import Tabs from './navigation/Tabs';


const MyDefaultTheme = {

  dark: false,
  colors: {
    primary: 'rgb(255, 255, 255)',
    background: 'rgb(255, 255, 255)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(0, 0, 0)',
    border: 'rgb(0, 0, 0)',
    notification: 'rgb(0, 0, 0)',
  },

};





const DarkTheme = {

  dark: true,
  colors: {
    primary: 'rgb(255, 255, 255)',
    background: 'rgb(0, 0, 0)',
    card: 'rgb(0, 0, 0)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(255, 255, 255)',
    notification: 'rgb(0, 0, 0)',
  },

};



export default function App() {
  
  const scheme = useColorScheme();
  
  return (
    
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <NavigationContainer theme={MyDefaultTheme}>
          <Tabs />
        </NavigationContainer>
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  safeContainer: {
    flex: 1,
    backgroundColor: 'red',
  }
});
