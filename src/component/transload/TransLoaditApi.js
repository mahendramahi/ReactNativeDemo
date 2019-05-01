import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
//const TransloaditClient  =  require('transloadit');

export default class TransLoaditApi extends Component{

  constructor(){

    super();

  }

  componentDidMount() {
  }

  onAssemblyStart() {
// const transloadit = new TransloaditClient({
//     authKey: '8a6be32063ef11e88759ed752c64bc2a',
//     authSecret: '72c3f3a08302ef1c629e26daa90b0b7ba367a477'
//   })

  console.log('trasnload it Obj' + JSON.stringify(transloadit));
  
  transloadit.addFile('myfile_1', './ben-o-sullivan-382817.jpg');
  
  const options = {
    params: {
      steps: {
        auth: {
            key: 'bb9f8370655c11e89b23f370040b9d9d',
            expires: '2029/11/27 16:53:14+00:00'
        },
        original: {
          robot: '/upload/handle',
        },
        resized: {
          use: [':original'],
          robot: '/image/resize',
          height: 100,
          imagemagick_stack: 'v1.0.0',
          width: 100,
          zoom: false,
        },
        archived: {
          use: {'steps': [':original','resized'], 'bundle_steps': true },
          robot: '/file/compress',
          result: true,
          format: 'tar',
          gzip: true,
        },
        exported: {
          use : ['resized','archived',':original'],
          robot: '/s3/store',
          credentials: 'demo_s3_credentials',
        },
      }
    }
  };
  console.log('result =' + JSON,stringify(options));

  // transloadit.createAssembly(options, (err, result) => {
  //     console.log('result =' + JSON,stringify(result));
  //   if (err) {
  //     throw err
  //   }
  
  //   console.log({result})
  // })
  }
  

  render() {

    return (

      <View style={styles.MainContainer}>

        <TouchableOpacity
        style={{ backgroundColor: '#000', width: 30, height: 30 }}
        onPress={() => {
            this.onAssemblyStart();
        }}
        >
        <Text>Click Here </Text>

        </TouchableOpacity>
       
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