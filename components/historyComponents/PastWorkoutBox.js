import {View,Text,StyleSheet,Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function PastWorkoutBox(){

return(
<View style={styles.container}>
    <Text style={{marginLeft: 15}}>Template Name</Text>
<Text style={{marginLeft: 15}}>Date</Text>
<View style={styles.WorkoutInfo}>
   <View><Ionicons name={'timer-sharp'}/><Text>Time</Text></View>
   <View><Ionicons name={'barbell-sharp'}/><Text>Weight</Text></View>
   <View><Ionicons name={'trophy-sharp'}/><Text>PR</Text></View> 
   </View>
<View style={[styles.WorkoutInfo,{justifyContent:'flex-start'}]}>
    <View style={styles.Exercises}><Text>Exercises</Text></View>
    <View style={styles.BestSet}><Text>Best set</Text></View>
    </View>

</View>
    );
}


const borderRadiumNum = 20;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: 'lightgrey',
        borderTopLeftRadius: borderRadiumNum,
        borderTopRightRadius: borderRadiumNum,
        borderBottomLeftRadius: borderRadiumNum,
        borderBottomRightRadius: borderRadiumNum,
        minHeight:200,

    },
    WorkoutInfo: {
        flex:1,
        flexDirection: 'row',
      
    
    },
    Exercises:{
marginLeft: 15
    },
    BestSet:{
marginLeft: 100
    }

  });