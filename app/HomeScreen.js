import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, View, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // 6.1.0

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Math Learning',
    headerStyle: { backgroundColor: '#006A40' },
    headerTitleStyle: { color: '#FFFFFF' },
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
	<TouchableHighlight onPress={() => navigate('Review')} underlayColor='#FFFFFF'>
          <View style={styles.button}>
            <Ionicons style={styles.buttonText}  name="md-paper" size={25} color="white"> REVIEW</Ionicons>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigate('Quiz')} underlayColor='#FFFFFF'>
          <View style={styles.button}>
            <Ionicons style={styles.buttonText}  name="md-create" size={25} color="white"> QUIZ</Ionicons>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigate('Formula')} underlayColor='#FFFFFF'>
          <View style={styles.button}>
            <Ionicons style={styles.buttonText}  name="md-easel" size={25} color="white"> FORMULAS</Ionicons>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigate('Dictionary')} underlayColor='#FFFFFF'>
          <View style={styles.button}>
            <Ionicons style={styles.buttonText}  name="md-book" size={25} color="white"> DICTIONARIES</Ionicons>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigate('About')} underlayColor='#FFFFFF'>
          <View style={styles.button}>
            <Ionicons style={styles.buttonText}  name="md-contacts" size={25} color="white"> ABOUT</Ionicons>
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
    width: 250,
    alignItems: 'center',
    backgroundColor: '#006A40'
  },
  buttonText: {
    padding: 15,
    color: '#FFFFFF',
    fontWeight: 'bold',
  }
})
