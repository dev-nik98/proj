/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {
  const [selectedRadio, setSelectedRadio] = useState(1);
  console.log('------', selectedRadio)
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={()=>{
        console.log('djkgdjkgbj')
        setSelectedRadio(1)}}>
        <View style={styles.radioWraper}>
          <View style={styles.radio}>
            {
            selectedRadio===1 ? <View style={styles.radioBg} ></View>:null
            }
          </View>
          <Text style={styles.radioText}>radio 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setSelectedRadio(2)}>
        <View style={styles.radioWraper}>
          <View style={styles.radio}>
            {
            selectedRadio===2 ? <View style={styles.radioBg} ></View>:null
            }
          </View>
          <Text style={styles.radioText}>radio 2</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
  radioText: {
    fontSize: 20,
    color: 'red',
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
    
  },
  
  radioBg: {
    backgroundColor: 'green',
    height: 28,
    width: 28,
    borderRadius: 20,
    margin: 4,

  },
  radioWraper: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default App;
