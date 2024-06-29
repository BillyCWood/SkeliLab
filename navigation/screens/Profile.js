import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import ProfilePicture from '../../components/profileComponents/ProfilePicture';
import Dashboard from '../../components/profileComponents/Dashboard';


export default function Profile({navigation}) {

  const { colors } = useTheme();

    return (
      
      <View style={[styles.container, {backgroundColor: colors.background}]}>
        <ProfilePicture />
        <Dashboard />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});