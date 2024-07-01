import {View,Text,StyleSheet} from 'react-native';

export default function Calendar(){

    return(
        <View style={styles.container}>
           <Text style={[styles.bold,{color:'red'}]}>Calendar</Text> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      alignItems:"flex-end",
      backgroundColor:'white',
      paddingRight: 25
    },
    bold:{
        fontWeight:'bold'
    }
  });