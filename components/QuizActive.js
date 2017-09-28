import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { gray } from '../utils/colors';
import QuizRemaining from './QuizRemaining';
import QuizScoring from './QuizScoring';
import QuizQAFlipper from './QuizQAFlipper';

export default class QuizActive extends Component {
  render() {
    console.log('QuizActive', this.props);
    const { title, questions, onCorrect, onIncorrect, idx } = this.props;
    return (
      <View style={styles.container}>
        <View style={[styles.group, { justifyContent: 'flex-start', flex: 1 }]}>
          <QuizRemaining n={questions.length - idx} />
        </View>
        <View style={[styles.group, { flex: 4 }]}>
          <QuizQAFlipper />
        </View>
        <View
          style={[styles.group, { justifyContent: 'space-around', flex: 2 }]}
        >
          <QuizScoring onCorrect={onCorrect} onIncorrect={onIncorrect} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 5,
    backgroundColor: '#ecf0f1',
  },
  group: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
    padding: 10,
    backgroundColor: '#ecf0f1',
  },
});
