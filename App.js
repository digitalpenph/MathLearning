import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.13
/*import { SQLite } from 'expo';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';

const db = SQLite.openDatabase({ name: 'chinook.db' });

export default class Lessons extends Component {
  state = {
    lessons: null,
  };

  componentDidMount() {
    db.transaction(tx => {
      tx.executeSql(
        'create table if not exists lessons (id integer primary key not null, name text, content text);'
      );
});
    this.add("Lesson 1", "the quick brown fox");
  }

  add(name, content) {
    db.transaction(
      tx => {
        tx.executeSql('insert into lessons (name, content) values (?, ?)', [name, content]);
        tx.executeSql('select * from lessons', [], (_, { rows: { _array } }) => this.setState({ lessons: _array })
        );
      },
      null,
      this.update
    );
}

  render() {
    const { lessons } = this.state;
    return (
      <View style={styles.container}>
            <Text>Sample</Text>
        {lessons.map(({ id, name, content }) => (
          <TouchableOpacity
            key={id}
            onPress={() => this.props.onPressItem && this.props.onPressItem(id)}
            style={{
              padding: 5,
              borderColor: 'black',
              borderWidth: 1,
            }}>
            <Text>{content}</Text>
          </TouchableOpacity>
))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});*/

import HomeScreen from './app/HomeScreen';
import StartScreen from './app/StartScreen';
import LessonScreen from './app/LessonScreen';
import ActivityScreen from './app/ActivityScreen'
import QuestionScreen from './app/QuestionScreen';
import ScoreScreen from './app/ScoreScreen';
import AboutScreen from './app/AboutScreen';

export const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Start: { screen: StartScreen },
  Lesson: { screen: LessonScreen },
  Activity: { screen: ActivityScreen },
  Question: { screen: QuestionScreen },
  Score: { screen: ScoreScreen },
  About: { screen: AboutScreen },
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}



