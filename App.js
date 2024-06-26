import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


import Tabs from './navigation/Tabs';

export default function App() {
  return (
    
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <NavigationContainer>
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
