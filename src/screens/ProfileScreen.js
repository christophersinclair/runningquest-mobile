import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const ProfileScreen = ( {navigation, route} ) => {
  const parameters = route.params;
  return (
    <View style={styles.mainView}>
      <Text>Profile</Text>
        <Button
          title="More Profile Details"
          onPress={() => { 
            navigation.navigate("Profile_to_Profile")}}/>
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

export default ProfileScreen;