import React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import { useFonts } from 'expo-font';


const TrialScreen = ( {navigation, route} ) => {
  const [loaded] = useFonts({
    OldLondon: require('../../assets/fonts/OldLondon.ttf'),
  });

  if (!loaded) {
    return null;
  }
  const quest = route.params.quest;
  return (
    <View style={styles.mainView}>
      <Image source={require('../../assets/images/BG.png')} style={styles.backgroundImage} />
      <View style={styles.overlay}>
      <Text style={{fontSize: 30, fontFamily: 'OldLondon'}}>Trials</Text>
      <Text style={{fontSize: 15, fontFamily: 'OldLondon'}}>Retrieving Trials for Quest {quest.id}</Text>
        <Button
          title="Home"
          onPress={() => { navigation.popToTop() }}/>
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

export default TrialScreen;