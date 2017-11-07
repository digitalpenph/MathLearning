import React, { Component } from 'react';
import { TouchableHighlight, ScrollView, Text, StyleSheet, StatusBar, View, AsyncStorage, Image } from 'react-native';

export default class LessonScreen extends Component {
  static navigationOptions = {
    title: 'Lesson',
    headerStyle: { backgroundColor: '#006A40' },
    headerTitleStyle: { color: '#FFFFFF' },
  };
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
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
          content: parsed[id].content,
          isLoading: false
        });
      });
    });
  }
  render() {
    const { navigate } = this.props.navigation;
    if (this.state.isLoading) {
      return <View style={styles.container}><Text style={styles.loading}>Loading...</Text></View>;
    } else {
      let name = this.state.name;
      let content = this.state.content;
      return (
        <View style={styles.container}>
          <StatusBar hidden={true} /> 
          <ScrollView style={{paddingLeft: 14, paddingRight: 14}}>
            <Text style={{fontSize:24, color: '#34495e'}}>{name}</Text>
	    {content.map((content, index) => (
	      <View>
                <Text style={styles.content}>
                  {content.text}
                </Text>
 	 	<Image source={content.image}/>
	      </View>
            ))}
          </ScrollView>
	  <View style={styles.nav}>
	    <TouchableHighlight onPress={() => navigate('Practice')} underlayColor='#ecf0f1'>
              <View style={styles.button}>
                <Text style={styles.buttonText}>PRACTICE</Text>
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
    backgroundColor: '#FFFFFF'
  },
  loading: {
    color: '#34495e', 
    textAlign: 'center', 
    fontSize: 18, 
    fontWeight: 'bold'
  },
  content: {
    fontSize:18,
    paddingTop: 20,
    color: '#34495e'
  },
  nav: {
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

