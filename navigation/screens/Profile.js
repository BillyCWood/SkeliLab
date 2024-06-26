import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ProfilePicture from '../../components/ProfilePicture';


export default function Profile({navigation}) {
    return (
      
      <View style={styles.container}>
        <ProfilePicture />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});