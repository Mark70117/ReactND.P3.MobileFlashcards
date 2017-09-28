import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  View,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { gray, blue, purple, white } from '../utils/colors';
import TextInButton from './TextInButton';

class IndivdualDeckView extends Component {
  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params;
    return {
      title,
    };
  };
  render() {
    const { title } = this.props.navigation.state.params;
    const questions = this.props.decks[title].questions;

    return (
      <View style={styles.container}>
        <View style={[styles.group, { flex: 3 }]}>
          <Text style={{ fontSize: 40 }}>{title}</Text>
          <Text style={{ fontSize: 24, color: gray }}>
            cards: {questions.length}
          </Text>
        </View>
        <View
          style={[styles.group, { flex: 2, justifyContent: 'space-around' }]}
        >
          <TextInButton
            onPress={() => {
              this.props.navigation.navigate('NewQuestionView', {
                title,
                questions,
              });
            }}
          >
            Add Card
          </TextInButton>
          <TextInButton
            onPress={() => {
              this.props.navigation.navigate('QuizView', {
                title,
                questions,
              });
            }}
          >
            Start Quiz
          </TextInButton>
        </View>
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
  group: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
    padding: 5,
    backgroundColor: '#ecf0f1',
  },
});

function mapStateToProps(state) {
  return {
    decks: state,
  };
}

export default connect(mapStateToProps)(IndivdualDeckView);
