import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function History({navigation}) {
  return (
    <View style={[styles.container, {backgroundColor: 'blue'}]}>
      <View style={{backgroundColor: 'green'}}>
        <Text style={{color:'red'}}>History</Text>
        <Text>Test</Text>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});