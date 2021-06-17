import React from 'react';
import { Button, View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';


const HomeScreen = ( {navigation, route} ) => {
    const [loaded] = useFonts({
        OldLondon: require('../../assets/fonts/OldLondon.ttf'),
      });
    
      if (!loaded) {
        return null;
      }
  return (
    <View style={styles.mainView}>
      <Image source={require('../../assets/images/BG.png')} style={styles.backgroundImage} />
      <View style={styles.overlay}>
        <Image source={require('../../assets/images/knight-idle.gif')} />
        <View style={{ flexDirection:"row" }}>
            <View style={{padding: 25}}>
                <TouchableOpacity
                    style={styles.yellowButton}
                    onPress={() => { 
                        navigation.navigate("Home_to_Settings", {user: {
                            id: 2
                    }}) }}
                >
                <ImageBackground source={require('../../assets/images/scroll.png')} style={styles.scrollBackground}>
                <Text style={styles.yellowButton} >Settings</Text>
                </ImageBackground>
                </TouchableOpacity>
            </View>
            <View style={{padding: 25}}>
                <TouchableOpacity
                    style={styles.yellowButton}
                    onPress={() => { 
                        navigation.navigate("Home_to_Quest", {user: {
                            id: 1
                    }}) }}
                >
                <ImageBackground source={require('../../assets/images/scroll.png')} style={styles.scrollBackground}>
                <Text style={styles.yellowButton} >Quests</Text>
                </ImageBackground>
                </TouchableOpacity>
            </View>
            <View style={{padding: 25}}>
                <TouchableOpacity
                    style={styles.yellowButton}
                    onPress={() => { 
                        navigation.navigate("Home_to_Profile", {user: {
                            id: 1
                        }}) }}
                >
                <ImageBackground source={require('../../assets/images/scroll.png')} style={styles.scrollBackground}>
                <Text style={styles.yellowButton} >Profile</Text>
                </ImageBackground>
                </TouchableOpacity>
            </View>
            
        </View>
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
  yellowButton: {
      color: 'crimson',
      fontSize: 25,
      fontFamily: 'OldLondon'
  },
  scrollBackground: {
    alignItems: "center", 
    justifyContent: "center",
    resizeMode: "cover",
    height: 100,
    width: 80
  },
});

export default HomeScreen;