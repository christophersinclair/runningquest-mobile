import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import QuestScreen from './src/screens/QuestScreen';
import TrialScreen from './src/screens/TrialScreen';
import SettingsScreen from './src/screens/SettingsScreen';

import { useFonts } from 'expo-font';


const Stack = createStackNavigator();
export default function App() {
  const [loaded] = useFonts({
    OldLondon: require('./assets/fonts/OldLondon.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="App_to_Home"
        screenOptions={
          {
            headerTintColor: 'seagreen',
            headerTransparent: true
          }
        }
      >
        <Stack.Screen
          name="App_to_Home"
          component={HomeScreen}
          options={{
            title: 'Running Quest',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 50,
              fontFamily: 'OldLondon'
            }
          }}
        />
        <Stack.Screen
          name="Home_to_Settings"
          component={SettingsScreen}
          options={{
            title: 'Settings',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 40,
              fontFamily: 'OldLondon'
            }
          }}
        />
        <Stack.Screen
          name="Home_to_Profile"
          component={ProfileScreen}
          options={{
            title: 'Profile',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 40,
              fontFamily: 'OldLondon'
            }
          }}
        />
        <Stack.Screen
          name="Profile_to_Profile"
          component={ProfileScreen}
          options={{
            title: 'Profile',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 40,
              fontFamily: 'OldLondon'
            }
          }}
        />
        <Stack.Screen
          name="Home_to_Quest"
          component={QuestScreen}
          options={{
            title: 'Quest',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 40,
              fontFamily: 'OldLondon'
            }
          }}
        />
        <Stack.Screen
          name="Quest_to_Trial"
          component={TrialScreen}
          options={ ( { route } ) =>({
            title: route.params.quest.id,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 40,
              fontFamily: 'OldLondon'
            }
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  oldLondonFont: {
    fontFamily: "OldLondon"
}
});
