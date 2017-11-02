import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import { NavigationActions } from 'react-navigation';

// or any pure javascript modules available in npm

export default class ScoreScreen extends Component {
  static navigationOptions = {
    title: 'Score',
    headerStyle: { backgroundColor: '#006A40' },
    headerTitleStyle: { color: '#FFFFFF' },
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.box2}>
            <Text style={styles.title}>
              High Score
            </Text>
            <Text style={styles.score}>
              100
            </Text>
          </View>
        </View>
        <View style={styles.options}>
          <TouchableHighlight onPress={() => this.props.navigation.dispatch(NavigationActions.back())} underlayColor='#FFFFFF'>
            <Text style={styles.button}>
              Back
             </Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor='#FFFFFF'>
            <Text style={styles.button}>
              Retry
            </Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor='#FFFFFF'>
            <Text style={styles.button}>
              Next
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
  box: {
    flex: 1,
    borderRadius: 10,
    marginTop: 50,
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#006A40',
  },
  box2: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  score: {
    textAlign: 'center',
    fontSize: 70,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  options: {
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  button: {
    borderRadius: 10,
    alignItems: 'center',
    fontSize: 20,
    backgroundColor: '#006A40',
    padding: 10,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
