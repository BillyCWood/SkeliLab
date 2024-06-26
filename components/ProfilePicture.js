import { StyleSheet, View, Text } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function ProfilePicture() {
    return(
        <View style={{flexDirection:'row'} }>
            <Ionicons name="person-circle-outline" onPress={() => alert('Profile Picture')} style={styles.ionicon} />
            <Text style={styles.text}>Name</Text>
        </View>
    );
}


const styles = StyleSheet.create({
  
  ionicon: {
    size: 10,
    color:'#474747',
    backgroundColor: 'red',
  },
  text: {
    paddingTop: 0,
    fontWeight: 'bold',
  },
});