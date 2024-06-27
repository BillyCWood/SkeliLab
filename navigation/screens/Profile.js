import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import ProfilePicture from '../../components/ProfilePicture';


export default function Profile({navigation}) {

  const { colors } = useTheme();

    return (
      
      <View style={[styles.container, {backgroundColor: colors.background}]}>
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