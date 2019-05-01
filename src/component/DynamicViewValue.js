import React, { Component } from 'react';
import { AppRegistry, View, Text, Image, Button, TextInput} from 'react-native';
//import UserAvatar from 'react-native-user-avatar';
import UserAvatar1 from './UserAvatar1';


export default class DynamicViewValue extends Component {
  constructor(props){
    super(props);
    this.state = {
      textInput : []
    }
  }
  addTextInput = (key) => {
    let textInput = this.state.textInput;
    textInput.push(<TextInput key={key} />);
    this.setState({ textInput })
  }
  CallImageAv = async() => {
    //alert('onerror');

    const respo = await fetch('https://truworth-video-in.s3-ap-south-1.amazonaws.com/memberimages/initial-image.png')
  alert(JSON.stringify(respo));
    //   <Image
  //   source={{ uri: 'https://truworth-video-in.s3-ap-south-1.amazonaws.com/memberimages/initial-image.png' }}
  //   onError={this.CallImageAv()} />

  //   <UserAvatar 
  //  name='Mahendra Sharma' 
  //  src={''} 
  //  onError={(error) =>
  //  size={40} 
  // /> 
  };

  render(){
    return(
      <View>
      {/* {this.CallImageAv()} */}
      <UserAvatar1 
          name='Mahendra Sharma'
          src={'https://truworth-video-in.s3-ap-south-1.amazonaws.com/memberimages/initial-image.png'} //{'https://static.techspot.com/images2/news/bigimage/2018/09/2018-09-04-image-6.png'} 
          size={40}
          /> 
        <Button title='+' onPress={() => this.addTextInput(this.state.textInput.length)} />
        {this.state.textInput.map((value, index) => {
          return value
        })}
      </View>
    )
  }
}