import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const QuestScreen = ( {navigation, route} ) => {
  const user = route.params.user;
  return (
    <View style={styles.mainView}>
      <Text style={{fontSize: 30}}>Quests</Text>
      <Text style={{fontSize: 15}}>Hello there user {user.id}!</Text>
      <Button
          title="Task"
          onPress={() => { 
            navigation.navigate("Quest_to_Task", {quest: {
                id: 3
            }}) 
        }}/>
        <Button
          title="Home"
          onPress={() => { navigation.popToTop() }}/>
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

export default QuestScreen;