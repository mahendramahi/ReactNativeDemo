import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';


export default class MainActivity extends Component {
 
    static navigationOptions =
      {
         title: 'MainActivity',
      };
     
      OpenSecondActivityFunction = () =>
      {
         this.props.navigation.navigate('Second', { text: 'mahendra' });
         
      }
     
      render()
      {
         return(
            <View style = { styles.container }>
     
               <Text style = { styles.ActivityNameTextCss }> MainActivity </Text>
     
               <Button onPress = { this.OpenSecondActivityFunction } title = 'Open Second Activity'/>
             
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