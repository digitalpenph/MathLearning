import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View, StatusBar, AsyncStorage, Alert } from 'react-native';


export default class StartScreen extends Component {
  static navigationOptions = {
    title: 'Choose Lesson',
    headerStyle: { backgroundColor: '#006A40' },
    headerTitleStyle: { color: '#FFFFFF' },
  };
  navigateLesson() {
    let lessonid = '0';
    AsyncStorage.setItem('lessonid', lessonid);
    this.props.navigation.navigate('Lesson');
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <TouchableHighlight onPress={this.navigateLesson.bind(this)} underlayColor='#FFFFFF'>
          <View style={styles.button}>
            <Text style={styles.buttonText}>LESSON 1</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight disabled={true} onPress={this.navigateLesson} underlayColor='#FFFFFF'>
          <View style={styles.button_disabled}>
            <Text style={styles.buttonText}>LESSON 2</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight disabled={true} onPress={this.navigateLesson} underlayColor='#FFFFFF'>
          <View style={styles.button_disabled}>
            <Text style={styles.buttonText}>LESSON 3</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight disabled={true} onPress={this.navigateLesson} underlayColor='#FFFFFF'>
          <View style={styles.button_disabled}>
            <Text style={styles.buttonText}>LESSON 4</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight disabled={true} onPress={this.navigateLesson} underlayColor='#FFFFFF'>
          <View style={styles.button_disabled}>
            <Text style={styles.buttonText}>LESSON 5</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  button: {
    borderRadius: 50,
    marginBottom: 30,
    width: 200,
    alignItems: 'center',
    backgroundColor: '#006A40'
  },
  button_disabled: {
    borderRadius: 50,
    marginBottom: 30,
    width: 200,
    alignItems: 'center',
    backgroundColor: '#ecf0f1'
  },
  buttonText: {
    padding: 15,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  }
})

