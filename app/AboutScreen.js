import React, { Component } from 'react';
import { Text, View, Image, StatusBar, StyleSheet } from 'react-native';

export default class AboutScreen extends Component {
  static navigationOptions = {
    title: 'About',
    headerStyle: { backgroundColor: '#006A40' },
    headerTitleStyle: { color: '#FFFFFF' },
  };
  render() {
    return (
      <View style={styles.container}>
	<StatusBar hidden={true} />
        <Image style={styles.logo} source={require("../assets/asj.png")}/>
        <Text style={styles.title}>Math Learning v1.0</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },
  title: {
    margin: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  logo: {
    height: 200,
    width: 200,
  }
});

