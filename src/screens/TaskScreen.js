import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const TaskScreen = ( {navigation, route} ) => {
  const quest = route.params.quest;
  return (
    <View style={styles.mainView}>
      <Text style={{fontSize: 30}}>Tasks</Text>
      <Text style={{fontSize: 15}}>Retrieving Tasks for Quest {quest.id}</Text>
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

export default TaskScreen;