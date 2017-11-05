import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.13

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

export default class App extends Component {
  componentWillMount(){
    let lessons = 
      [
        {
        name: 'Adding & Subtracting Radicals',
        content: 'Just as with regular numbers, square roots can be added together. But you might not be able to simplify the addition all the way down to one number. Just as you cant add apples and oranges, so also you cannot combine unlike radical terms. In order to be able to combine radical terms together, those terms have to have the same radical part.'
        },
        {
        name: 'Multiplicating Radicals',
        content: 'Just as with regular numbers, square roots can be added together. But you might not be able to simplify the addition all the'
        }
      ]
    AsyncStorage.setItem('lessons', JSON.stringify(lessons));
  }
  render() {
    return <SimpleApp />;
  }
}

