import React, { Component } from 'react';
import { Text, TextInput, ScrollView, View, StyleSheet, TouchableHighlight, StatusBar, Alert } from 'react-native';

export default class App extends Component {
  static navigationOptions = {
    title: 'Activity',
    headerStyle: { backgroundColor: '#006A40' },
    headerTitleStyle: { color: '#F0A40E' },
  };
  onChanged(text){
    let newText = '';
    let numbers = '0123456789';
    for (var i=0; i < text.length; i++) {
      if(numbers.indexOf(text[i]) > -1 ) {
        newText = newText + text[i];
      } else {
        // your call back function
        alert("please enter numbers only");
      }
      this.setState({ myNumber: newText });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.title}>
          <Text style={{fontSize: 24, fontWeight: 'bold', color: '#34495e'}}>Question 1/10</Text>
        </View>
        <View style={styles.question}>
          <ScrollView>
          <Text style={styles.content}>When you multiply prime numbers together the answer is always an odd number.</Text>
          <Text style={styles.content}>Give an example to show Betty is wrong.</Text>
          </ScrollView>
        </View>
        <View style={styles.answer}>
          <Text style={{color: '#34495e'}}>ANSWER:</Text>
          <TextInput 
            style={{width: 200}}
            keyboardType = 'numeric'
            onChangeText = {(text)=> this.onChanged(text)}
            maxLength = {10}  //setting limit of input
          />
        </View>
        <View style={styles.nav}>
	  <TouchableHighlight onPress={() => { Alert.alert('You submitted your answer!')}} underlayColor='#FFFFFF'>
            <View style={styles.button}>
              <Text style={styles.buttonText}>SUBMIT ANSWER</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF'
  },
  title: {
    padding: 14,
    backgroundColor: '#ecf0f1'
  },
  question: {
    flex: 1,
    padding: 14,
  },
  answer: {
    alignItems: 'center',
    padding: 14,
  },
  content: {
    fontSize:18,
    paddingTop: 20,
    color: '#34495e'
  },
  nav: {
    padding: 14,
    backgroundColor: '#ecf0f1'
  },
  button: {
    borderRadius: 50,
    alignItems: 'center',
    backgroundColor: '#006A40'
  },
  buttonText: {
    padding: 5,
    color: '#F0A40E',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

