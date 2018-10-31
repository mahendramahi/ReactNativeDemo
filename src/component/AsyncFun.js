import React, { Component } from 'react';
 
import { AppRegistry, StyleSheet, FlatList, Text, View, Alert, Platform } from 'react-native';
 
export default class AsyncFun extends Component {
 
 constructor(props)
 {
   super(props);
 
 }
 
 onTextPress = async () => {
    console.log('call');
    console.log('time:-' + new Date().toLocaleString());
    let data = await fetch('https://facebook.github.io/react-native/movies.json');
    console.log('time:-' + new Date().toLocaleString());
    console.log('time:-' + new Date().toLocaleString());
    console.log('data:-' + JSON.stringify(data));
    console.log('time:-' + new Date().toLocaleString());
 }

 getPromise() {
  return new Promise( (resolve, reject) => {
    console.log('log:-' + JSON.stringify(resolve));
    // resolve after 3 second timeout.
    setTimeout(() => {
      resolve({ key: new Date().getTime()});
      console.log('value'+resolve.key);
    }, 3000 );
    console.log('log:-' + JSON.stringify(resolve));
    console.log('finish');
});
 }

 render() {
   return (
 
<View style={styles.MainContainer}>
 <Text 
 style={{ fontSize: 20 }}
 onPress={this.onTextPress.bind(this)}
 >
  ClickHere and see debug logs with time
 </Text>
   
   
</View>
           
   );
 }
}
 
const styles = StyleSheet.create({
 
MainContainer :{
 
justifyContent: 'center',
flex:1,
margin: 10,
paddingTop: (Platform.OS) === 'ios' ? 20 : 0
 
},
 
GridViewBlockStyle: {
 
  justifyContent: 'center',
  flex:1,
  alignItems: 'center',
  height: 100,
  margin: 5,
  backgroundColor: '#00BCD4'
 
}
,
 
GridViewInsideTextItemStyle: {
 
   color: '#fff',
   padding: 10,
   fontSize: 18,
   justifyContent: 'center',
   
 },
 
});