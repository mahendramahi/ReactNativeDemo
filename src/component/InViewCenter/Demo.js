import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import InCenter from './InCenter';

export default class Demo extends Component {

    render () {
        return (
            <ScrollView 
            style={{ width: '100%', flex: 1 }}>
                
                <InCenter onChange={inView => console.log('Inview1: ' + inView)}>
                    <Text
                    style={{ height: 50, width: '100%' }}
                    >Hello Video View</Text>
                </InCenter>
            

                <InCenter onChange={inView => console.log('Inview2: ' + inView)}>
                    <Text
                     style={{ height: 50, width: '100%' }}
                     >Hello Video View</Text>
                </InCenter>
            
                <InCenter onChange={inView => console.log('Inview3: ' + inView)}>
                    <Text
                     style={{ height: 50, width: '100%' }}
                     >Hello Video View</Text>
                </InCenter>

                <InCenter onChange={inView => console.log('Inview4: ' + inView)}>
                    <Text
                     style={{ height: 50, width: '100%' }}
                     >Hello Video View</Text>
                </InCenter>
            

                <InCenter onChange={inView => console.log('Inview5: ' + inView)}>
                    <Text
                     style={{ height: 50, width: '100%' }}
                     >Hello Video View</Text>
                </InCenter>


            </ScrollView>

        );
    }


}