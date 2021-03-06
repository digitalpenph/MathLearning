import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View, StatusBar, AsyncStorage, Alert } from 'react-native';

export default class ReviewScreen extends Component {
  static navigationOptions = {
    title: 'Choose Topic',
    headerStyle: { backgroundColor: '#006A40' },
    headerTitleStyle: { color: '#FFFFFF' },
  };
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      lesson: null,
    };
  }
  componentWillMount(){
    AsyncStorage.getItem('lessons').then((value) => {
      let parsed = JSON.parse(value);
      this.setState({
        lesson: parsed,
        isLoading: false
      });
    });
  }
  navigateLesson(id) {
    let lessonid = id;
    AsyncStorage.setItem('lessonid', lessonid);
    this.props.navigation.navigate('Topic');
  }
  render() {
    if (this.state.isLoading) {
      return <View style={styles.container}><Text style={styles.loading}>Loading...</Text></View>;
    } else {
      let topic = this.state.lesson;
      return (
        <View style={styles.container}>
          <StatusBar hidden={true} />
          <TouchableHighlight onPress={this.navigateLesson.bind(this, '0')} underlayColor='#FFFFFF'>
            <View style={styles.button}>
              <Text style={styles.buttonText}>{topic[0].name}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight disabled={true} onPress={this.navigateLesson.bind(this, '1')} underlayColor='#FFFFFF'>
            <View style={styles.button_disabled}>
              <Text style={styles.buttonText}>LESSON 2</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight disabled={true} onPress={this.navigateLesson.bind(this, '2')} underlayColor='#FFFFFF'>
            <View style={styles.button_disabled}>
              <Text style={styles.buttonText}>LESSON 3</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight disabled={true} onPress={this.navigateLesson.bind(this, '3')} underlayColor='#FFFFFF'>
            <View style={styles.button_disabled}>
              <Text style={styles.buttonText}>LESSON 4</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight disabled={true} onPress={this.navigateLesson.bind(this, '4')} underlayColor='#FFFFFF'>
            <View style={styles.button_disabled}>
              <Text style={styles.buttonText}>LESSON 5</Text>
            </View>
          </TouchableHighlight>
        </View>
      );
    }
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
  button_disabled: {
    borderRadius: 50,
    marginBottom: 30,
    width: 250,
    alignItems: 'center',
    backgroundColor: '#ecf0f1'
  },
  buttonText: {
    padding: 15,
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  }
})

