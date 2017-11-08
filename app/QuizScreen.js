import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View, StatusBar } from 'react-native';

export default class QuizScreen extends Component {
  static navigationOptions = {
    title: 'Choose Dificulty',
    headerStyle: { backgroundColor: '#006A40' },
    headerTitleStyle: { color: '#FFFFFF' },
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <TouchableHighlight onPress={() => navigate('Question')} underlayColor='#FFFFFF'>
          <View style={styles.button}>
            <Text style={styles.buttonText}>EASY</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight disabled={true} onPress={() => navigate('Question')} underlayColor='#FFFFFF'>
          <View style={styles.button_disabled}>
            <Text style={styles.buttonText}>MODERATE</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight disabled={true} onPress={() => navigate('Question')} underlayColor='#FFFFFF'>
          <View style={styles.button_disabled}>
            <Text style={styles.buttonText}>HARD</Text>
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

