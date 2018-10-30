/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, PixelRatio, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
 
import ImagePicker from 'react-native-image-picker';
 
import RNFetchBlob from 'rn-fetch-blob';
 
export default class OuterFile extends Component {

  render() {
    return (
      <View style={styles.container}>
 
        <TouchableOpacity >
 
          <View style={styles.ImageContainer}>
 
             <Text>Select a Photo</Text> 
 
          </View>
 
        </TouchableOpacity>
 
 
        <TextInput
 
          placeholder="Enter Image Name "
 
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyle}
        />
 
 
        <TouchableOpacity activeOpacity={0.6} style={styles.button} >
 
          <Text style={styles.TextStyle}> UPLOAD IMAGE TO SERVER </Text>
 
        </TouchableOpacity>
 
      </View>
    );
  }
 
}
 
const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF8E1',
    paddingTop: 20
  },
 
  ImageContainer: {
    borderRadius: 10,
    width: 250,
    height: 250,
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CDDC39',
 
  },
 
  TextInputStyle: {
 
    textAlign: 'center',
    height: 40,
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#028b53',
    marginTop: 20
  },
 
  button: {
 
    width: '80%',
    backgroundColor: '#00BCD4',
    borderRadius: 7,
    marginTop: 20
  },
 
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    padding: 10
  }
 
});