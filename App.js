import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import QuestScreen from './src/screens/QuestScreen';
import TaskScreen from './src/screens/TaskScreen';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="App_to_Home"
      >
        <Stack.Screen
          name="App_to_Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Home_to_Profile"
          component={ProfileScreen}
        />
        <Stack.Screen
          name="Profile_to_Profile"
          component={ProfileScreen}
        />
        <Stack.Screen
          name="Home_to_Quest"
          component={QuestScreen}
        />
        <Stack.Screen
          name="Quest_to_Task"
          component={TaskScreen}
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
});
