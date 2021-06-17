import React, {useEffect, useState} from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import { useFonts } from 'expo-font';


const QuestScreen = ( {navigation, route} ) => {    
  const user = route.params.user;
  const [questDetails, setQuestDetails] = useState(null);

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    var url = 'http://192.168.1.159:8080/api/quest/get-for-user?userid=' + user.id;
    xhr.open('GET', url)
    xhr.send();
    xhr.onload = () => {
        if (xhr.status == 200) {
            response = xhr.responseText;
            setQuestDetails(response);
        } else {
            console.log(url);
            console.log(`HTTP Request Failed ${xhr.status}`);
        }
        
    };
    
  }, []);

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
      <Text style={{fontFamily: 'OldLondon'}}>{
        (questDetails == null ? "" : response)
      }</Text>
      
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

export default QuestScreen;