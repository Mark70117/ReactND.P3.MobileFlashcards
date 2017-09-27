import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { gray } from '../utils/colors';
import QuizActive from './QuizActive';
import QuizFinale from './QuizFinale';

export default function QuizView({ nCorrect }) {
  return (
    <View>
      <QuizFinale nCorrect={111} />
    </View>
  );
}
