import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class AnyColorButton extends Component {
  displayAlert = () =>{
    alert("Your device is under attack by a virus");
  }
  render() {
    return <Button title="Click me" color= {this.props.color} onPress ={this.displayAlert}></Button>;
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{ marginTop: 500 }}>
        <AnyColorButton color="black"/>
        <Text> My First React Component</Text>
      </View>
    );
  }
}