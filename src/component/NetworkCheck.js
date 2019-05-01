import React, {Component} from 'react';

import { StyleSheet, Text, View, NetInfo } from 'react-native';

export default class NetworkCheck extends Component{

  constructor(){

    super();

    this.state={

      connection_Status : ""

    }

  }

  componentDidMount() {

    NetInfo.isConnected.addEventListener(
        'connectionChange',
        this._handleConnectivityChange

    );
   
    NetInfo.isConnected.fetch().done((isConnected) => {

      if(isConnected == true)
      {
        this.setState({connection_Status : "Online"})
      }
      else
      {
        this.setState({connection_Status : "Offline"})
      }

    });
  }
  

  componentWillUnmount() {

    NetInfo.isConnected.removeEventListener(
        'connectionChange',
        this._handleConnectivityChange

    );

  }

  _handleConnectivityChange = (isConnected) => {

    if(isConnected == true)
      {
        this.setState({connection_Status : "Online"})
      }
      else
      {
        this.setState({connection_Status : "Offline"})
      }
  };

  render() {

    return (

      <View style={styles.MainContainer}>


        <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 20}}> You are { this.state.connection_Status } </Text>

       
      </View>

    );

  }

}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20
  },

  TextStyle: {
    fontSize:20,
    textAlign: 'center',
  }

});