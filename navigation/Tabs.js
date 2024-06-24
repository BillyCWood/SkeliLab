import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Exercises from './screens/Exercises';
import History from './screens/History';
import Profile from './screens/Profile';
import StartWorkout from './screens/StartWorkout';

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
                "fontSize": 10
              },
              "tabBarItemStyle": {
                "backgroundColor": "black"
              },
              "tabBarStyle": [
                {
                  "display" : "flex"
                },
                null
              ]
          })}
          >

          <Tab.Screen name={profileName} component={Profile} />
          <Tab.Screen name={historyName} component={History} />
          <Tab.Screen name={startWorkoutName} component={StartWorkout} />
          <Tab.Screen name={exercisesName} component={Exercises} />
          
        </Tab.Navigator>
      </NavigationContainer>
    )
  }