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
import { gray, blue, white } from '../utils/colors';
import { addCard } from '../actions';
import { connect } from 'react-redux';
import { addCardDeck } from '../utils/api';

//TODO share SubmitBtn
function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        Platform.OS === 'ios' ? style.iosSubmitBtn : style.AndroidSubmitBtn
      }
    >
      <Text style={style.submitBtnText}>SUBMIT</Text>
    </TouchableOpacity>
  );
}

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

    Alert.alert('Submit presses', 'Congratulations! You have clicked submit');
    this.setState({ question_text: '', answer_text: '' });
    return;
  };
  render() {
    const { question_text, answer_text } = this.state;

    const { title, questions } = this.props.navigation.state.params;
    return (
      <KeyboardAvoidingView
        style={style.container}
        behavior="position"
        keyboardVerticalOffset={-164}
      >
        <Text>Question:</Text>
        <TextInput
          value={question_text}
          style={style.input}
          onChangeText={question_text => this.setState({ question_text })}
        />
        <Text>Answer:</Text>
        <TextInput
          value={answer_text}
          style={style.input}
          onChangeText={answer_text => this.setState({ answer_text })}
        />
        <SubmitBtn onPress={this.submit} />
      </KeyboardAvoidingView>
    );
  }
}

const style = StyleSheet.create({
  deck: {
    flexDirection: 'row',
    marginTop: 12,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 25,
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 300,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#7f7f7f',
    margin: 20,
  },
  iosSubmitBtn: {
    backgroundColor: blue,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  AndroidSubmitBtn: {
    backgroundColor: blue,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
});

function mapStateToProps(state) {
  return {
    decks: state,
  };
}
export default connect(mapStateToProps)(NewQuestionView);
