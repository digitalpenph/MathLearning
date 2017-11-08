import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.13

import HomeScreen from './app/HomeScreen';
import ReviewScreen from './app/ReviewScreen';
import TopicScreen from './app/TopicScreen';
import PracticeScreen from './app/PracticeScreen';
import QuizScreen from './app/QuizScreen'
import QuestionScreen from './app/QuestionScreen';
import FormulaScreen from './app/FormulaScreen';
import DictionaryScreen from './app/DictionaryScreen';
import AboutScreen from './app/AboutScreen';

export const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Review: { screen: ReviewScreen },
  Topic: { screen: TopicScreen },
  Practice: { screen: PracticeScreen },
  Quiz: { screen: QuizScreen },
  Question: { screen: QuestionScreen },
  Formula: { screen: FormulaScreen },
  Dictionary: { screen: DictionaryScreen },
  About: { screen: AboutScreen },
});

export default class App extends Component {
  componentWillMount(){
    let lessons = 
      [
        {
        name: 'Adding & Subtracting Radicals',
        content:
          [
            {
            text: 'Just as with regular numbers, square roots can be added together. But you might not be able to simplify the addition all the way down to one number. Just as you can\'t add apples and oranges, so also you cannot combine unlike radical terms. In order to be able to combine radical terms together, those terms have to have the same radical part.',
            image: ''
            },
            {
            text: 'Since the radical is the same in each term (being the square root of three), then these are like terms. This means that I can combine the terms.\n\nI have two copies of the radical, added to another three copies. This gives mea total of five copies:',
            image: require('./assets/lesson1/a.png')
            },
            {
            text: 'That middle step, with the parentheses, shows the reasoning that justifies the final answer. You probably won\'t ever need to show this step, but it\'s what should be going through your mind.',
            image: ''
            },
            {
            text: 'The radical part is the same in each term, so I can do this addition. To help me keep track that the first term means one copy of the square root of three, I\'ll insert the understood 1:',
            image: require('./assets/lesson1/b.png')
            },
            {
            text: 'Don\'t assume that expressions with unlike radicals cannot be simplified. It is possible that, after simplifying the radicals, the expression can indeed be simplified.',
            image: ''
            },
            {
            text: 'To simplify a radical addition, I must first see if I can simplify each radical term. In this particular case, the square roots simplify completely (that is, down to whole numbers):',
            image: require('./assets/lesson1/c.png')
            },
            {
            text: 'I have three copies of the radical, plus another two copies, giving me— Wait a minute! I can simplify those radicals right down to whole numbers:',
            image: require('./assets/lesson1/d.png')
            },
            {
            text: 'Don\'t worry if you don\'t see a simplification right away. If I hadn\'t noticed until the end that the radical simplified, my steps would have been different, but my final answer would have been the same:',
            image: require('./assets/lesson1/e.png')
            }
          ]
        }
      ];
    AsyncStorage.setItem('lessons', JSON.stringify(lessons));
    let practices = 
      [
        [
          {
          text: 'Simplify:',
          image: require('./assets/practice1/a1.png'),
	  answer: require('./assets/practice1/a2.png')
          },
	  {
          text: 'Simplify:',
          image: require('./assets/practice1/b1.png'),
          answer: require('./assets/practice1/b2.png')
          },
	  {
          text: 'Simplify:',
          image: require('./assets/practice1/c1.png'),
          answer: require('./assets/practice1/c2.png')
          },
	  {
          text: 'Simplify:',
          image: require('./assets/practice1/d1.png'),
          answer: require('./assets/practice1/d2.png')
          },
	  {
          text: 'Simplify:',
          image: require('./assets/practice1/e1.png'),
          answer: require('./assets/practice1/e2.png')
          },
	  {
          text: 'Simplify:',
          image: require('./assets/practice1/f1.png'),
          answer: require('./assets/practice1/f2.png')
          }
        ]
      ];
    AsyncStorage.setItem('practices', JSON.stringify(practices));
    let formulas = 
      [
        {
        text: 'Powers',
        image: require('./assets/formulas/a.png'),
        },
        {
        text: 'Logarithms',
        image: require('./assets/formulas/b.png'),
        }
      ];
    AsyncStorage.setItem('formulas', JSON.stringify(formulas));
    let dictionaries = 
      [
        {
        name: 'Radical Degree',
        desc: 'The number of times the radicand is multiplied by itself. 2 means square root, 3 means cube root. After that they are called the 4th root, 5th root and so on. If this is missing, it is assumed to be 2 - the square root.'
        },
        {
        name: 'Radical Symbol',
        desc: 'The √ symbol that means root of. The length of the horizontal bar is important. See note below.',
        },
  	{
        name: 'Radicand',
        desc: 'The thing you are finding the root of.'
        }
      ];
    AsyncStorage.setItem('dictionaries', JSON.stringify(dictionaries));
  }
  render() {
    console.disableYellowBox = true;
    return <SimpleApp />;
  }
}

