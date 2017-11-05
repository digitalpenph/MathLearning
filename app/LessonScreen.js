import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, StatusBar, View, AsyncStorage } from 'react-native';

export default class LessonScreen extends Component {
  static navigationOptions = {
    title: 'Lesson 1',
    headerStyle: { backgroundColor: '#006A40' },
    headerTitleStyle: { color: '#FFFFFF' },
  };
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      content: null 
    };
  }
  componentWillMount(){
    AsyncStorage.getItem('lessonid').then((value) => {
      let id = parseInt(value);
      AsyncStorage.getItem('lessons').then((value) => {
        let parsed = JSON.parse(value);
        this.setState({
          name: parsed[id].name,
          content: parsed[id].content
        });
      });
    });
  }
  render() {
    let name = this.state.name;
    let content = this.state.content;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} /> 
        <ScrollView style={{padding: 14}}>
          <Text style={{fontSize:24, color: '#34495e'}}>{name}</Text>
          <Text style={styles.content}>{content}</Text>
        </ScrollView>
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
  content: {
    fontSize:18,
    paddingTop: 20,
    color: '#34495e'
  }
});

