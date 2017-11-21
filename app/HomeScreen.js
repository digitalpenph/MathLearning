import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, View, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // 6.1.0
import * as Animatable from 'react-native-animatable'; // 1.2.4
import { Audio } from 'expo';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Math Learning',
    headerStyle: { backgroundColor: '#006A40' },
    headerTitleStyle: { color: '#FFFFFF' },
  };
  async componentDidMount() {
    const sound = new Audio.Sound();
    await sound.loadAsync(require('../assets/sounds/sound.mp3'));
    await sound.setIsLoopingAsync(true);
    await sound.playAsync();
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <TouchableHighlight onPress={() => navigate('Review')} underlayColor='#FFFFFF'>
          <Animatable.View animation="rubberBand" iterationCount="infinite" easing="ease-out" delay={100} duration={3000} style={styles.button}>
            <Ionicons style={styles.buttonText}  name="md-paper" size={25} color="white"> REVIEW</Ionicons>
          </Animatable.View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigate('Quiz')} underlayColor='#FFFFFF'>
          <Animatable.View animation="shake" iterationCount="infinite" easing="ease-out" delay={200} duration={3000} style={styles.button}>
            <Ionicons style={styles.buttonText}  name="md-create" size={25} color="white"> QUIZ</Ionicons>
          </Animatable.View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigate('Formula')} underlayColor='#FFFFFF'>
          <Animatable.View animation="swing" iterationCount="infinite" easing="ease-out" delay={300} duration={3000} style={styles.button}>
            <Ionicons style={styles.buttonText}  name="md-easel" size={25} color="white"> FORMULAS</Ionicons>
          </Animatable.View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigate('Dictionary')} underlayColor='#FFFFFF'>
          <Animatable.View animation="tada" iterationCount="infinite" easing="ease-out" delay={400} duration={3000} style={styles.button}>
            <Ionicons style={styles.buttonText}  name="md-book" size={25} color="white"> DICTIONARIES</Ionicons>
          </Animatable.View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigate('About')} underlayColor='#FFFFFF'>
          <Animatable.View animation="jello" iterationCount="infinite" easing="ease-out" delay={500} duration={3000} style={styles.button}>
            <Ionicons style={styles.buttonText}  name="md-contacts" size={25} color="white"> ABOUT</Ionicons>
          </Animatable.View>
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
    margin: 15,
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
