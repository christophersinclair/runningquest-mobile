import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const HomeScreen = ( {navigation, route} ) => {
  return (
    <View style={styles.mainView}>
      <Text>Running Quest</Text>
        <Button
          title="Profile"
          onPress={() => { 
            navigation.navigate("Home_to_Profile") 
        }}/>
        <Button
          title="Quests"
          onPress={() => { 
              navigation.navigate("Home_to_Quest", {user: {
                id: 2
              }}) }}/>
    </View>
  )
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default HomeScreen;