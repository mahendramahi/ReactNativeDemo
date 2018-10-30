import React, { Component } from 'react';
 
import { AppRegistry, StyleSheet,ScrollView, FlatList, Text, View, Alert, ActivityIndicator, Platform} from 'react-native';
 
export default class Project extends Component {
  
  constructor(props)
  {
 
    super(props);
 
    this.state = { 
    isLoading: true
  }
  }
 
  componentDidMount() {
    
       return fetch('https://reactnativecode.000webhostapp.com/FruitsList.php')
         .then((response) => response.json())
         .then((responseJson) => {
           this.setState({
             isLoading: false,
             dataSource: responseJson
           }, function() {
             // In this block you can do something with new state.
           });
         })
         .catch((error) => {
           console.error(error);
         });
     }
 
FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  }
 
  GetFlatListItem (fruit_name) {
   
  Alert.alert(fruit_name);
 
  }
 
 
  render() {
 
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
 
    return (
 

<ScrollView style={styles.MainContainer} nestedScrollEnabled={true}>

<View style={{ width: '100%', height: 30, backgroundColor: '#afafaf' }}> 

<Text style={{ fontSize: 20 }}> HEading </Text>

</View>
  
       <FlatList
       
          data={ this.state.dataSource }
          
          ItemSeparatorComponent = {this.FlatListItemSeparator}
 
          renderItem={({item}) => <Text style={styles.FlatListItemStyle} onPress={this.GetFlatListItem.bind(this, item.fruit_name)} > {item.fruit_name} </Text>}
 
          keyExtractor={(item, index) => index}
          
         />
    

    <View style={{ width: '100%', height: 30, backgroundColor: '#afafaf' }}> 

<Text style={{ fontSize: 20 }}> HEading </Text>

</View>
  
       <FlatList
       
          data={ this.state.dataSource }
          
          ItemSeparatorComponent = {this.FlatListItemSeparator}
 
          renderItem={({item}) => <Text style={styles.FlatListItemStyle} onPress={this.GetFlatListItem.bind(this, item.fruit_name)} > {item.fruit_name} </Text>}
 
          keyExtractor={(item, index) => index}
          
         />
    
    
</ScrollView>
            
    );
  }
}
 
const styles = StyleSheet.create({
 
MainContainer :{
 
flex:1,
margin: 10,
paddingTop: (Platform.OS === 'ios') ? 20 : 0,
 
},
 
FlatListItemStyle: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
 
});