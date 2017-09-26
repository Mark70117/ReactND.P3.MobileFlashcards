import React, { Component } from 'react';
import TextButton from './TextButton';

import { View, StyleSheet, Text } from 'react-native';
import { gray } from '../utils/colors';

class IndivdualDeckView extends Component {
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params;
    return {
      title,
    };
  };
  render() {
    const { title, questions } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <View>
          <Text style={{ fontSize: 20 }}>{title}</Text>
          <Text style={{ fontSize: 16, color: gray }}>
            cards: {questions.length}
          </Text>
        </View>
        <TextButton
          style={{ margin: 20 }}
          onPress={() => {
            console.log('opPress IDV');
            this.props.navigation.navigate('NewQuestionView', {
              title,
              questions,
            });
          }}
        >
          Add Card
        </TextButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deck: {
    flexDirection: 'row',
    marginTop: 12,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
    backgroundColor: '#ecf0f1',
  },
});

export default IndivdualDeckView;
