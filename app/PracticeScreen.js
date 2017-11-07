import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet, TouchableHighlight, StatusBar, Image, AsyncStorage, Alert } from 'react-native';
import renderIf from './renderIf';

export default class PracticeScreen extends Component {
  static navigationOptions = {
    title: 'Practice',
    headerStyle: { backgroundColor: '#006A40' },
    headerTitleStyle: { color: '#FFFFFF' },
  };
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      index: 0,
      isLoading: true,
      content: null 
    };
  }
  componentWillMount(){
    AsyncStorage.getItem('lessonid').then((value) => {
      let id = parseInt(value);
      AsyncStorage.getItem('practices').then((value) => {
        let parsed = JSON.parse(value);
        this.setState({
          content: parsed[id],
          isLoading: false
        });
      });
    });
  }
  toggleAnswer(){
    this.setState({
      status: true
    });
  }
  next() {
    if(this.state.index < this.state.content.length - 1) {
      this.setState({
        index: this.state.index + 1,
	status: false
      });
    }
  }
  back() {
    if(this.state.index > 0) {
      this.setState({
        index: this.state.index - 1,
	status: false
      });
    }
  }
  render() {
    if (this.state.isLoading) {
      return <View style={styles.container}><Text style={styles.loading}>Loading...</Text></View>;
    } else {
      let content = this.state.content;
      let current = this.state.index;
      let count = this.state.content.length;
      let title = 'Practice # ' + (current + 1) + '/' + count;
      return (
        <View style={styles.container}>
          <StatusBar hidden={true} />
          <View style={styles.title}>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: '#34495e'}}>{title}</Text>
          </View>
          <View style={styles.question}>
            <ScrollView>
              <Text style={styles.content}>
                {content[current].text}
              </Text>
              <Image source={content[current].image}/>
	      {renderIf(this.state.status)(
		<View>
	          <Text style={styles.content}>Answer:</Text>
	          <Image source={content[current].answer}/>
		</View>
	      )}
            </ScrollView>
          </View>
          <View style={styles.nav}>
            <TouchableHighlight onPress={()=>this.back()} underlayColor='#ecf0f1'>
              <View style={styles.button}>
                <Text style={styles.buttonText}>BACK</Text>
              </View>
            </TouchableHighlight>
    	    <TouchableHighlight onPress={()=>this.toggleAnswer()} underlayColor='#ecf0f1'>
              <View style={styles.button}>
                <Text style={styles.buttonText}>SHOW ANSWER</Text>
              </View>
            </TouchableHighlight>
	    <TouchableHighlight onPress={()=>this.next()} underlayColor='#ecf0f1'>
              <View style={styles.button}>
                <Text style={styles.buttonText}>NEXT</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF'
  },
  loading: {
    color: '#34495e', 
    textAlign: 'center', 
    fontSize: 18, 
    fontWeight: 'bold'
  },
  title: {
    padding: 14,
    backgroundColor: '#ecf0f1'
  },
  question: {
    flex: 1,
    padding: 14,
  },
  content: {
    fontSize:18,
    paddingTop: 20,
    color: '#34495e'
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 14,
    backgroundColor: '#ecf0f1'
  },
  button: {
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#006A40'
  },
  buttonText: {
    padding: 5,
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

