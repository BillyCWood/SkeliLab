import { StyleSheet, View, Text, Pressable, Dimensions } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';


let numWorkouts= 0;

export default function ProfilePicture() {
    return(
        <View style={styles.mainContainer}>
            <Ionicons name="person-circle-outline" onPress={() => alert('Profile Picture')} style={styles.ionicon} />
            <Pressable style={styles.pressableContainer} onPress={() => alert('change name')}>
              <View style={styles.textContainer}>
                <Text style={[styles.text, {color: 'black'}]}>Name</Text>
                <Text style={[styles.text, {color: 'grey', fontWeight: 'thin'}]}>{numWorkouts} workouts</Text>
              </View>
              <Ionicons name="chevron-forward" style={{color: '#0A20FF', fontSize: 20, marginLeft: Dimensions.get('screen').width * .55,}} />
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
  
  mainContainer: {
    flexDirection:'row',
    height: 70,
    backgroundColor: 'white',
    paddingLeft: 15,
    alignItems: 'center',
  },
  pressableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width:'100%',
  },
  textContainer: {
    flexDirection:'column',
  },
  ionicon: {
    color:'#474747',
    marginBottom: 0,
    fontSize: 50,
  },
  text: {
    marginLeft: 10,
    paddingTop: 0,
    fontWeight: 'bold',
    fontSize: 16,
  },
});