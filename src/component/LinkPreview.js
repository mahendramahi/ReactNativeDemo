import React, { Component } from 'react';
 
import { AppRegistry, StyleSheet,ScrollView, FlatList, Text, View, Alert, ActivityIndicator, Platform} from 'react-native';
import preview from 'react-native-page-previewer';
import LinkPreview from 'react-native-link-preview';
export default class LinkPerview extends Component {
  
  constructor(props)
  {
    super(props);
    this.state = { 
    linkPerView: '',
    linkPreview2: ''
  }
  }
 
  componentDidMount() {
//     LinkPreview.getPreview('https://www.youtube.com/watch?v=MejbOFk7H6c')
//   .then(data => {
//       this.setState({
//         linkPerView: data
//       });
//       console.debug(data)}
//       );
 

     }
     onBhootClick = async () => {

       // const data = await fetch('http://api.linkpreview.net/?key=5beaafab49cf24689b49443824ac482bc330dbdaef7e2')
        LinkPreview.getPreview('https://www.google.com')
        .then(data => {
            //this.setState({ linkPreview2: data })
          console.debug(JSON.stringify(data));
        });

        // preview("https://www.google.com", function(err, data) {
        //     if(!err) {
        //         console.log(JSON.stringify(data));
        //         this.setState({
        //                     linkPerView: data
        //                   });
        //     }
        // });
        // LinkPreview.getPreview('https://www.google.com')
        //   .then(data => {
        //     console.debug(data)
        //       this.setState({
        //         linkPerView: data
        //       });
        //     }
        //       ); 
     }
 
  render() {
 
    return (
            <View>
                <Text 
                onPress={this.onBhootClick.bind(this)}
                > bhoot {this.state.linkPerView} </Text>
                <Text> {this.state.linkPreview2} </Text>
            </View>
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