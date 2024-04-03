import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

class Student extends Component {
  render() {


    return (
      <View>
        <Text style={{fontSize: 30, color: 'turquoise'}}>
          Student name:{this.props.name}
        </Text>
     
      </View>
    );
  }
}

export default Student;
