import {View,Text,StyleSheet,Dimensions} from 'react-native';
import PastWorkoutBox from './PastWorkoutBox'

export default function HistroyDashboard(){

return(
    <View style={styles.mainContainer}>
        <PastWorkoutBox/>
    </View>
);
}

const styles = StyleSheet.create({
    mainContainer: {
        margin: 15,
        gap: 15,
        fontWeight: 'bold',
    },
});