import React, { Component } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { gray, blue, offwhite, white } from '../utils/colors';
import { addCard } from '../actions';
import { connect } from 'react-redux';
import { addCardDeck } from '../utils/api';
import TextInButton from './TextInButton';

class NewQuestionView extends Component {
  state = {
    question_text: '',
    answer_text: '',
  };
  submit = () => {
    const { title, questions } = this.props.navigation.state.params;

    const { question_text, answer_text } = this.state;
    if (question_text === '') {
      Alert.alert('Missing question', 'You need to fill in the question field');
      return;
    }
    if (answer_text === '') {
      Alert.alert('Missing question', 'You need to fill in the answer field');
      return;
    }
    const params = { title, questions, question_text, answer_text };
    this.props.dispatch(addCard(params));
    addCardDeck({
      card: { question: question_text, answer: answer_text },
      deckName: title,
    });

    Alert.alert(
      'Card Added',
      'Congratulations! You your card has been added to the deck.' +
        ' Continue entering more cards, or hit the back arrow in the top left corner.'
    );
    this.setState({ question_text: '', answer_text: '' });
    return;
  };
  render() {
    const { question_text, answer_text } = this.state;

    const { title, questions } = this.props.navigation.state.params;
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="position"
        keyboardVerticalOffset={-164}
      >
        <Text>Question:</Text>
        <TextInput
          value={question_text}
          style={styles.input}
          onChangeText={question_text => this.setState({ question_text })}
        />
        <Text>Answer:</Text>
        <TextInput
          value={answer_text}
          style={styles.input}
          onChangeText={answer_text => this.setState({ answer_text })}
        />
        <TextInButton onPress={this.submit}>SUBMIT</TextInButton>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 25,
    backgroundColor: offwhite,
  },
  input: {
    width: 300,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: gray,
    margin: 20,
  },
});

function mapStateToProps(state) {
  return {
    decks: state,
  };
}
export default connect(mapStateToProps)(NewQuestionView);
