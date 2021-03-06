import React, { Component } from 'react';
import { TouchableHighlight, ScrollView, Text, StyleSheet, StatusBar, View, AsyncStorage, Image } from 'react-native';

export default class FormulaScreen extends Component {
  static navigationOptions = {
    title: 'Formulas',
    headerStyle: { backgroundColor: '#006A40' },
    headerTitleStyle: { color: '#FFFFFF' },
  };
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      content: null
    };
  }
  componentWillMount(){
    AsyncStorage.getItem('formulas').then((value) => {
      let parsed = JSON.parse(value);
      this.setState({
        content: parsed,
        isLoading: false
      });
    });
  }
  render() {
    const { navigate } = this.props.navigation;
    if (this.state.isLoading) {
      return <View style={styles.container}><Text style={styles.loading}>Loading...</Text></View>;
    } else {
      let content = this.state.content;
      return (
        <View style={styles.container}>
          <StatusBar hidden={true} /> 
          <ScrollView style={{paddingLeft: 14, paddingRight: 14}}>
	    {content.map((content, index) => (
	      <View>
                <Text style={styles.content}>
                  {content.text}
                </Text>
 	 	<Image source={content.image}/>
	      </View>
            ))}
          </ScrollView>
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
    color: '#34495e',
    fontWeight: 'bold'
  },
});

