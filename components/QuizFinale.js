import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { gray, offwhite } from '../utils/colors';
import QuizRemaining from './QuizRemaining';
import QuizScoring from './QuizScoring';
import QuizQAFlipper from './QuizQAFlipper';
import { clearLocalNotification } from '../utils/helpers';

export default class QuizFinale extends Component {
  componentDidMount() {
    clearLocalNotification();
  }
  render() {
    const { nCorrect } = this.props;
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 24 }}>You got {nCorrect} correct!</Text>
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
    backgroundColor: offwhite,
  },
});
