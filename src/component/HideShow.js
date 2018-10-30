import React, { Component } from 'react';
 
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
 
export default class HideShow extends Component {
 
  constructor(){
 
    super();
 
    this.state ={
 
      status:true
 
    }
  }
 
ShowHideTextComponentView = () =>{

    this.setState({status: !this.state.status});
  
}
 
  render() {
  
    return (
 
      <View style={styles.MainContainer}>
 
      {
          // Pass any View or Component inside the curly bracket.
          // Here the ? Question Mark represent the ternary operator.
 
        this.state.status ? <Text style= {{ fontSize: 25, color: "#000", textAlign: 'center' }}> Hello Friends </Text> : null
      }
 
      <Button title="Hide Text Component" onPress={this.ShowHideTextComponentView} />
 
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
 
MainContainer :{
 
// Setting up View inside content in Vertically center.
justifyContent: 'center',
flex:1,
margin: 10
 
}
 
});