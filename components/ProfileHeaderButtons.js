import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text } from 'react-native';

export default function ProfileHeaderButtons() {
    return(
        <View style={{flexDirection: 'row'}}>
            <Ionicons name='settings-outline' onPress={() => alert('this is the settings button!')} style={{marginRight: 20, color: '#0A20FF'}} size={20} />
            <Ionicons name='scale-outline' onPress={() => alert('this is the measurements button!')} style={{marginRight: 20, color: '#0A20FF'}} size={20} />
        </View>
    );
}