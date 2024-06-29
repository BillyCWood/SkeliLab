import { View, StyleSheet, Text } from 'react-native';

export default function WeeklyCalories() {

    return(
        <View style={styles.container}>
            <Text style={{fontWeight: 'bold'}}>Calories This Week</Text>
            <Text style={{fontWeight: 'thin', color:'grey'}}>Nutrition</Text>
        </View>
    );

}


const borderRadiumNum = 10;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: 'lightgrey',
        borderTopLeftRadius: borderRadiumNum,
        borderTopRightRadius: borderRadiumNum,
        borderBottomLeftRadius: borderRadiumNum,
        borderBottomRightRadius: borderRadiumNum,
        padding: 15,
    }
});