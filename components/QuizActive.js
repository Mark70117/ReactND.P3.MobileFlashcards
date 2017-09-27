import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { gray } from '../utils/colors';
import QuizRemaining from './QuizRemaining';
import QuizScoring from './QuizScoring';
import QuizQAFlipper from './QuizQAFlipper';

export default function QuizActive({ n }) {
  return (
    <View>
      <QuizRemaining n={100} />
      <QuizQAFlipper />
      <QuizScoring />
    </View>
  );
}
