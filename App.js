import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaContext } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


//import { createNativeStackNavigator} from '@react-navigation/native-stack';
import  Login  from './screens/LoginScreen';
import  Home  from './screens/HomeScreen';
import  Messages  from './screens/MessagesScreen';
import  FavoritesScreen  from './screens/FavoritesScreen';
import Profile from './screens/ProfileScreen';
import  AddMissions  from './screens/AddMissionsScreen';


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home'
            } else if (route.name === 'Messages') {
              iconName = 'message'
            } else if (route.name === 'Profile') {
              iconName = 'user-circle'
            } 

            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#7D1D3F",
          tabBarInactiveTintColor: "#C4547B",
          tabBarLabelPosition: "below-icon",
          tabBarStyle: [
    {
      display: "flex",
      backgroundColor: '#CDB4DB'
    },
    null
  ]
         
        })}
        
      >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function ProfileScreen() {
  return (
    <ProfileScreen/>
  );  
}

function HomeScreen() {
  return (
    <HomeScreen/>
  );  
}

function MessagesScreen() {
  return (
    <MessagesScreen/>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Tab = createBottomTabNavigator();