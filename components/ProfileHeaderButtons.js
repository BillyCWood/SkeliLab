import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet,View, Modal, Text, Dimensions, Pressable } from 'react-native';
import { useState } from 'react';
import { useTheme } from '@react-navigation/native';


export default function ProfileHeaderButtons() {

    const { colors } = useTheme();


    const [modalVisibleSettings, setModalVisibleSettings] = useState(false);
    const [modalVisibleMeasurements, setModalVisibleMeasurements] = useState(false);


    return(
        <View style={{flexDirection: 'row'}}>
            <Ionicons 
                name='settings-outline'
                onPress={
                    () => setModalVisibleSettings(true)
                }
                style={{marginRight: 20, color: '#0A20FF'}} 
                size={20} 
            />
            <Ionicons name='scale-outline' onPress={() => setModalVisibleMeasurements(true)} style={{marginRight: 20, color: '#0A20FF'}} size={20} />

            <View>
                <Modal
                    visible={modalVisibleSettings}
                    onRequestClose={() => setModalVisibleSettings(false)}
                    animationType='slide'
                    presentationStyle='pageSheet'
                >
                    <View style={styles.container}>
                        <View style={styles.containerHeader}>
                            <Pressable onPress={() => setModalVisibleSettings(false)} style={styles.closeButton} ><Ionicons name='close' size={20} color='white' /></Pressable>
                            <Text style={{marginLeft: -45 + Dimensions.get('screen').width * .42}}>Settings</Text>
                        </View>
                    </View>
              </Modal>
            </View>


            <View>
                <Modal
                    visible={modalVisibleMeasurements}
                    onRequestClose={() => setModalVisibleMeasurements(false)}
                    animationType='slide'
                    presentationStyle='pageSheet'
                >
                    <View style={styles.container}>
                        <View style={styles.containerHeader}>
                            <Pressable onPress={() => setModalVisibleMeasurements(false)} style={styles.closeButton} ><Ionicons name='close' size={20} color='white' /></Pressable>
                            <Text style={{marginLeft: -45 + Dimensions.get('screen').width * .39}}>Measurements</Text>
                        </View>
                    </View>
              </Modal>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        marginLeft: 20,
    },
    containerHeader: {
        flexDirection: 'row',
    },
    closeButton:{
        backgroundColor:'lightgrey',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        width: 25,
        height: 20,
    },
})