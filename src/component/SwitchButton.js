import React, { Component } from 'react';
 
import { AppRegistry, StyleSheet, Text, View, Switch, Alert} from 'react-native';
 
export default class SwitchButton extends Component {
 
 constructor(){
 
   super();
 
   this.state ={
 
    SwitchOnValueHolder :  false
 
   }
 }
 
ShowAlert = (value) =>{
 
  this.setState({
 
    SwitchOnValueHolder: value
  })
 
  if(value == true)
  {
 
    //Perform any task here which you want to execute on Switch ON event.
    Alert.alert("Switch is On.");
  }
  else{
 
    //Perform any task here which you want to execute on Switch OFF event.
    Alert.alert("Switch is Off.");
  }
 
}
 
 render() {
 
   return (
 
     <View style={styles.MainContainer}>
 
       <Text style={{fontSize: 18}}> Switch </Text>
 
        <Switch
          onValueChange={(value) => this.ShowAlert(value)}
          style={{marginBottom: 10}}
          value={this.state.SwitchOnValueHolder} />
 
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