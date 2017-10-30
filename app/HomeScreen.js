import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View, StatusBar } from 'react-native';
import { Constants } from 'expo';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Math Learning',
    headerStyle: { backgroundColor: '#006A40' },
    headerTitleStyle: { color: '#F0A40E' },
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
	<TouchableHighlight onPress={() => navigate('Start')} underlayColor='#FFFFFF'>
	  <View style={styles.button}>
	    <Text style={styles.buttonText}>START</Text>
	  </View>
	</TouchableHighlight>
	<TouchableHighlight onPress={() => navigate('Activity')} underlayColor='#FFFFFF'>
	  <View style={styles.button}>
	    <Text style={styles.buttonText}>ACTIVITY</Text>
	  </View>
	</TouchableHighlight>
	<TouchableHighlight onPress={() => navigate('Score')} underlayColor='#FFFFFF'>
	  <View style={styles.button}>
	    <Text style={styles.buttonText}>SCORE</Text>
	  </View>
	</TouchableHighlight>
	<TouchableHighlight onPress={() => navigate('About')} underlayColor='#FFFFFF'>
	  <View style={styles.button}>
	    <Text style={styles.buttonText}>ABOUT</Text>
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
  buttonText: {
    padding: 15,
    color: '#F0A40E',
    fontSize: 18,
    fontWeight: 'bold',
  }
})
