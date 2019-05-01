import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Tags from "react-native-tags";
import AutoTags from 'react-native-tag-autocomplete';

// const UselessComponent = () => (
//     <Tags
//       initialText="monkey"
//       textInputProps={{
//         placeholder: "Any type of animal"
//       }}
//       initialTags={}
//       onChangeTags={tags => console.log(tags)}
//       onTagPress={(index, tagLabel, event, deleted) =>
//         console.log(index, tagLabel, event, deleted ? "deleted" : "not deleted")
//       }
//       containerStyle={{ justifyContent: "center" }}
//       inputStyle={{ backgroundColor: "white" }}
//     />
//   );

export default class HashTagTest extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            emails: 'mahendra.sharma@truworth.com',
            text: '',
              suggestions : [ {name:'Mickey Mouse'}, {name:'demo1'}, {name:'demo2'}, {name:'demo3'}, {name:'demo4'}],
              tagsSelected : []
        };
    }

    handleDelete = index => {
      let tagsSelected = this.state.tagsSelected;
      tagsSelected.splice(index, 1);
      this.setState({ tagsSelected });
   }
   
   handleAddition = suggestion => {
      this.setState({ tagsSelected: this.state.tagsSelected.concat([suggestion]) });
   }

    render () {
        return (
            <View
            style={{ flex: 1, width: '100%' }}>
            <AutoTags
            suggestions={this.state.suggestions}
            tagsSelected={this.state.tagsSelected}
            handleAddition={this.handleAddition}
            handleDelete={this.handleDelete}
            placeholder="Add a contact.." />
                {/* <UselessComponent /> */}
            </View>

        );
    }


}