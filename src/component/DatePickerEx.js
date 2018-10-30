import React, { Component } from 'react';
 
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
 
import { DatePickerDialog } from 'react-native-datepicker-dialog'
 
import moment from 'moment';
 
export default class DatePickerEx extends Component {
 
  constructor(props){
 
    super(props);
 
    this.state = {
 
      DateText: '',
 
      DateHolder: null,
      
    }
  }
 
  /**
   * Textbox click listener
   */
  DatePickerMainFunctionCall = () => {
 
    let DateHolder = this.state.DateHolder;
 
    if(!DateHolder || DateHolder == null){
 
      DateHolder = new Date();
      this.setState({
        DateHolder: DateHolder
      });
    }
 
    //To open the dialog
    this.refs.DatePickerDialog.open({
 
      date: DateHolder,
 
    });
 
  }
 
  /**
   * Call back for dob date picked event
   *
   */
  onDatePickedFunction = (date) => {
    this.setState({
      dobDate: date,
      DateText: moment(date).format('DD-MMM-YYYY')
    });
  }
 
  render() {
    return (
      <View style={styles.container}>
 
        <Text style={styles.content}>
 
          React Native Date Picker Dialog Example
 
        </Text>
 
          <TouchableOpacity onPress={this.DatePickerMainFunctionCall.bind(this)} >
 
            <View style={styles.datePickerBox}>
 
              <Text style={styles.datePickerText}>{this.state.DateText}</Text>
 
            </View>
 
          </TouchableOpacity>
 
 
        {/* Place the dialog component at end of your views and assign the references, event handlers to it.*/}
        <DatePickerDialog ref="DatePickerDialog" onDatePicked={this.onDatePickedFunction.bind(this)} />
       
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFFFFF'
  },
 
  content: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
 
  datePickerBox:{
    marginTop: 9,
    borderColor: '#FF5722',
    borderWidth: 0.5,
    padding: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    height: 38,
    justifyContent:'center'
  },
 
  datePickerText: {
    fontSize: 14,
    marginLeft: 5,
    borderWidth: 0,
    color: '#000',
 
  },
});