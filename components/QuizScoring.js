import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { gray } from '../utils/colors';

export default function QuizScoring({ onCorrect, onIncorrect }) {
  return (
    <View>
      <Text>Correct button here</Text>
      <Text>Incorrect button here</Text>
    </View>
  );
}
