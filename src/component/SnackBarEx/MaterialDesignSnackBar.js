import React, { Component } from 'react';
 
import { AppRegistry, Animated, View, Platform, Button, Image, StyleSheet, Text } from 'react-native';
 
export default class MaterialDesignSnackBar extends Component
{
   constructor()
   {
      super();
 
      this.animatedValue = new Animated.Value(60);
 
      this.ShowSnackBar = false;
 
      this.HideSnackBar = true;
 
      this.state = { SnackBarInsideMsgHolder: '' };
   }
 
  ShowSnackBarFunction(SnackBarInsideMsgHolder="Default SnackBar Message...", duration=3000)
  {
    if( this.ShowSnackBar === false )
    {
      this.setState({ SnackBarInsideMsgHolder: SnackBarInsideMsgHolder });
 
      this.ShowSnackBar = true;
 
      Animated.timing
      (
          this.animatedValue,
          { 
              toValue: 0,
              duration: 350
          }
      ).start(this.hide(duration));
    }     
  }
 
    hide = (duration) =>
    {
      this.timerID = setTimeout(() =>
      {
        if(this.HideSnackBar === true)
        {
            this.HideSnackBar = false;
 
            Animated.timing
            (
              this.animatedValue,
              { 
                toValue: 60,
                duration: 350
              }
            ).start(() =>
            {
              this.HideSnackBar = true;
              this.ShowSnackBar = false;
 
              clearTimeout(this.timerID);
            })
        }
      }, duration); 
    }
 
    SnackBarCloseFunction = () =>
    {
      if(this.HideSnackBar === true)
      {
          this.HideSnackBar = false;
 
          clearTimeout(this.timerID);
 
          Animated.timing
          (
              this.animatedValue,
              { 
                toValue: 60,
                duration: 350
              }
          ).start(() =>
          {
              this.ShowSnackBar = false;
              this.HideSnackBar = true;
          });
      }
    }
 
    render()
    {
      return(
 
         <Animated.View style = {[{ transform: [{ translateY: this.animatedValue }]}, styles.SnackBarContainterView ]}>
 
 
            <Text numberOfLines = { 1 } style = { styles.SnackBarInsideTextStyle }>{ this.state.SnackBarInsideMsgHolder }</Text>
 
 
            <Text style = { styles.SnackBarUndoTextStyle} onPress = { this.SnackBarCloseFunction } > UNDO </Text>
 
 
         </Animated.View>
         
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