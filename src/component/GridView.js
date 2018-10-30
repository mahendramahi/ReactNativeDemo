import React, { Component } from 'react';
 
import { AppRegistry, StyleSheet, FlatList, Text, View, Alert, Platform } from 'react-native';
 
export default class GridView extends Component {
 
 constructor(props)
 {
   super(props);
 
   this.state = { GridViewItems: [
     {key: 'One'},
     {key: 'Two'},
     {key: 'Three'},
     {key: 'Four'},
     {key: 'Five'},
     {key: 'Six'},
     {key: 'Seven'},
     {key: 'Eight'},
     {key: 'Nine'},
     {key: 'Ten'},
     {key: 'Eleven'},
     {key: 'Twelve'},
     {key: 'Thirteen'},
     {key: 'Fourteen'},
     {key: 'Fifteen'},
     {key: 'Sixteen'},
     {key: 'Seventeen'},
     {key: 'Eighteen'},
     {key: 'Nineteen'},
     {key: 'Twenty'}
   ]}
 }
 
 GetGridViewItem (item) {
  
 Alert.alert(item);
 
 }
 
 
 render() {
   return (
 
<View style={styles.MainContainer}>
 
      <FlatList
      
         data={ this.state.GridViewItems }
 
         renderItem={({item}) =><View style={styles.GridViewBlockStyle}>
 
            <Text style={styles.GridViewInsideTextItemStyle} onPress={this.GetGridViewItem.bind(this, item.key)} > {item.key} </Text>
            
            </View>}
 
         numColumns={2}
 
        />
   
   
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