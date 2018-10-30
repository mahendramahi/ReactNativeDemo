import React, { Component } from 'react';
 
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
 
import { StackNavigator } from 'react-navigation';
import MainActivity from './MainActivity';
import SecondActivity from './SecondActivity';


 
export default ActivityProject = StackNavigator(
{
  First: { screen: MainActivity },
  
  Second: { screen: SecondActivity }
});
 
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