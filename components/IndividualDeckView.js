import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { gray } from '../utils/colors';

class IndivdualDeckView extends Component {
  render() {
    const { title, questions } = this.props;
    <View style={styles.deck}>
      <View>
        <Text style={{ fontSize: 20 }}>{title}</Text>
        <Text style={{ fontSize: 16, color: gray }}>
          cards: {questions.length}
        </Text>
      </View>
    </View>;
  }
}

const styles = StyleSheet.create({
  deck: {
    flexDirection: 'row',
    marginTop: 12,
  },
});

export default IndivdualDeckView;
