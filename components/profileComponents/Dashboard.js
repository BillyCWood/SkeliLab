import { View, StyleSheet, Text } from 'react-native';
import WorkoutsPerWeek from './WorkoutsPerWeek';
import DailyMacros from './DailyMacros';
import WeeklyCalories from './WeeklyCalories';

export default function Dashboard() {

    return(
        <View style={styles.mainContainer}>
            <Text style={{fontWeight:'bold', fontSize: 17,}}>Dashboard</Text>
            <WorkoutsPerWeek />
            <DailyMacros />
            <WeeklyCalories />
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