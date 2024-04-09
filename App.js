/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Text,
  View,
 
  StyleSheet,
  Platform,
} from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={{fontSize: 30}}>Platform:{Platform.OS}</Text>
      {
      Platform.OS=="android" ? 
        <View style={{backgroundColor:'pink', height:100, width:100}}/>
       : 
        <View style={{backgroundColor:'blue', height:100, width:100}}/>
      }
      <Text style={styles.text}>HEY</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text:{
    color:Platform.OS=="android"?'green':'yellow',
    fontSize:50
  }
});

export default App;
