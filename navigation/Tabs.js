import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';

// Screens
import Exercises from './screens/Exercises';
import History from './screens/History';
import Profile from './screens/Profile';
import StartWorkout from './screens/StartWorkout';

// Components
import Button from '../components/Button';
import ProfileHeaderButtons from '../components/ProfileHeaderButtons';

// Screen Names
const exercisesName = 'Exercises';
const historyName = 'History';
const profileName = 'Profile';
const startWorkoutName = 'Start Workout';


const Tab = createBottomTabNavigator();

export default function Tabs() {
    return (
      <NavigationContainer>
        <Tab.Navigator 
          initialRouteName={startWorkoutName}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size}) => {
              let iconName;
              let routeName = route.name;

              if(routeName === profileName){
                iconName = focused ? 'person': 'person-outline';
              }
              else if(routeName === historyName) {
                iconName = focused ? 'time' : 'time-outline';
              }
              else if(routeName === startWorkoutName) {
                iconName = focused ? 'add' : 'add-outline';
              }
              else if(routeName === exercisesName) {
                iconName = focused ? 'barbell' : 'barbell-outline';
              }
            
              return <Ionicons name={iconName} size={size} color={color} />

            },
              "tabBarActiveTintColor": "white",
              "tabBarLabelStyle": {
                "paddingBottom": 10,
                "fontSize": 14
              },
              "tabBarItemStyle": {
                "backgroundColor": "black"
              },
              "tabBarStyle": [
                {
                  "display" : "flex",
                  "height": 60,
                },
                null
              ],
          })}
          > 
          <Tab.Screen name={profileName} component={Profile} 
            // Have to use inline styles here rather than using the StyleSheet because the headerRight option is overriding the StyleSheet
            // and inline styles override the StyleSheet
            options={{ 
              headerRight: () => <ProfileHeaderButtons />,
              headerTitleAlign: 'left',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 25,
                paddingTop: 15,
                textAlign:'left',
              },
            }} 
          
          />
          
          <Tab.Screen name={historyName} component={History} options={styles} />
          
          <Tab.Screen name={startWorkoutName} component={StartWorkout} options={styles} />
          
          <Tab.Screen name={exercisesName} component={Exercises} options={styles} />
          
        </Tab.Navigator>
      </NavigationContainer>
    )
  }


  const styles = StyleSheet.create({

    headerTitleAlign: 'left',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 25,
      paddingTop: 15,
      textAlign:'left',
    },
  });