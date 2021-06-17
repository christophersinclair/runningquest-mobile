import React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import { useFonts } from 'expo-font';


const SettingsScreen = ( {navigation, route} ) => {
    const [loaded] = useFonts({
        OldLondon: require('../../assets/fonts/OldLondon.ttf'),
      });
    
      if (!loaded) {
        return null;
      }
  const parameters = route.params;
  return (
    <View style={styles.mainView}>
      <Image source={require('../../assets/images/BG.png')} style={styles.backgroundImage} />
      <View style={styles.overlay}>
      <Text style={{fontFamily: 'OldLondon'}}>Settings</Text>
        <Button
          title="More Settings Details"
          onPress={() => { 
            navigation.navigate("Settings_to_Settings")}}/>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: 'transparent'
  },
});

export default SettingsScreen;