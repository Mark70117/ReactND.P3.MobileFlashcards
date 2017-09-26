import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { gray, blue, white } from '../utils/colors';

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
    const { qestion_text, answer_text } = this.state;

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

export default NewQuestionView;
