import React, { Component } from 'react';
 
import { AppRegistry, StyleSheet, Text, View, Slider} from 'react-native';
 
export default class SeekBar extends Component {
 
 constructor(){
 
   super();
 
   this.state ={
 
    SliderValue :  0
 
   }
 }
 
 render() {
 
   return (
 
     <View style={styles.MainContainer}>
 
        <Text style = {{fontSize: 20}}>Slider Value = { this.state.SliderValue }</Text>
 
        <Slider
          step = { 1 }
          minimumValue = { 0 }
          maximumValue = { 100 }
          minimumTrackTintColor = "#009688"
          onValueChange={(ChangedValue) => this.setState({ SliderValue: ChangedValue })}
          style = {{ width: '100%' }} 
          />
 
     </View>
   );
 }
}
 
const styles = StyleSheet.create({
 
MainContainer :{
 
justifyContent: 'center',
alignItems: 'center',
flex:1,
margin: 10
 
}
 
});