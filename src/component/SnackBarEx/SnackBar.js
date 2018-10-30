import React, { Component } from 'react';
 
import { AppRegistry, Animated, View, Platform, Button, Image, StyleSheet, Text } from 'react-native';

import MaterialDesignSnackBar from './MaterialDesignSnackBar';

export default class Project extends Component
{
   constructor()
   {
      super();
   }
 
   DisplayMaterialDesignSnackBar = () =>
   {
      this.refs.ReactNativeCodeSnackBar.ShowSnackBarFunction("ReactNativeCode.com");
   }
 
   render()
   {
      return(
         <View style = { styles.MainContainer }>
 
            <Button onPress = { this.DisplayMaterialDesignSnackBar } title=" Show Material Design SnackBar " >  </Button>
 
            <MaterialDesignSnackBar ref = "ReactNativeCodeSnackBar"/>
 
         </View>
      );
   }
}
 
const styles = StyleSheet.create(
{
  MainContainer:
  {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0
  },
 
  SnackBarContainterView:
  {
    position: 'absolute',
    backgroundColor: '#009688', 
    flexDirection: 'row',
    alignItems: 'center',
    left: 0,
    bottom: 0,
    right: 0,
    height: 60,
    paddingLeft: 10,
    paddingRight: 55
  },
 
  SnackBarInsideTextStyle:
  {
    color: '#fff',
    fontSize: 18
  },
 
  SnackBarUndoTextStyle:{
 
    color: '#FFEB3B',
    fontSize: 18,
    position: 'absolute',
    right: 10,
    justifyContent: 'center',
    padding: 5
 
  }
});
 