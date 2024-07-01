import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Calendar from "../../components/historyComponents/Calendar.js"
import HistroyDashboard from "../../components/historyComponents/HistroyDashboard.js"

export default function History({navigation}) {
  return (
    <View>
      <Calendar/>
      <HistroyDashboard/>
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