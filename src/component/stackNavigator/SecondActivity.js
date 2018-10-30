import React, { Component } from 'react';
 
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';

export default class SecondActivity extends Component
{
  static navigationOptions =
  {
     title: 'SecondActivity',
  };
 
  render()
  {
     return(
        <View style = { styles.container }>
 
           <Text style = { styles.ActivityNameTextCss }> SecondActivity </Text>

           <Text style = { styles.ActivityNameTextCss }
           > {this.props.navigation.state.params.text} </Text>
 
        </View>
     );
  }
}

const styles = StyleSheet.create(
    {
      container:
      {
         justifyContent: 'center',
         flex:1,
         margin: 10
       
      },
     
      ActivityNameTextCss:
      {
         fontSize: 22,
         color: 'black',
         textAlign: 'center',
      },
     
    });