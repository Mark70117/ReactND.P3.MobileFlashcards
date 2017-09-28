import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { gray } from '../utils/colors';
import QuizActive from './QuizActive';
import QuizFinale from './QuizFinale';

export default class QuizView extends Component {
  state = {
    idx: 0,
    nCorrect: 0,
  };
  onCorrect = () => {
    const { idx, nCorrect } = this.state;

    console.log('onCorrect');
    this.setState({ idx: idx + 1, nCorrect: nCorrect + 1 });
  };
  onIncorrect = () => {
    const { idx } = this.state;

    console.log('onIncorrect');
    this.setState({ idx: idx + 1 });
  };
  render() {
    const { idx, nCorrect } = this.state;
    const { title, questions } = this.props.navigation.state.params;

    return (
      <View style={{ flex: 1 }}>
        {idx < questions.length ? (
          <QuizActive
            title={title}
            questions={questions}
            onCorrect={this.onCorrect}
            onIncorrect={this.onIncorrect}
            idx={idx}
          />
        ) : (
          <QuizFinale nCorrect={nCorrect} />
        )}
      </View>
    );
  }
}
