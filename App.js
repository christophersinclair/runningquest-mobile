import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import QuestScreen from './src/screens/QuestScreen';
import TrialScreen from './src/screens/TrialScreen';
import SettingsScreen from './src/screens/SettingsScreen';

import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react/cjs/react.development';
import { useCallback, useState } from 'react';

const Stack = createStackNavigator();
export default function App() {
  
  
  const [loaded] = Font.useFonts({ OldLondon: require('./assets/fonts/OldLondon.ttf')});

  if (!loaded) {
    return null;
  }

  // const [appIsReady, setAppIsReady] = useState(false);
  // useEffect(() => {
  //   async function prepare() {
  //     try {
  //       // Keep the splash screen visible while we fetch resources
  //       await SplashScreen.preventAutoHideAsync();
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       // Tell the application to render
  //       setAppIsReady(true);
  //     }
  //   }

  //   prepare();
  // }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (appIsReady) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [appIsReady]);

  // if (!appIsReady && !loaded) {
  //   return null;
  // }

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
