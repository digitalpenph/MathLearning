import React, { Component } from 'react';
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

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}



