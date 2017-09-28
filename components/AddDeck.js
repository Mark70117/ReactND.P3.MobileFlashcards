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
import { createDeck } from '../utils/api';
import { connect } from 'react-redux';
import { addDeck } from '../actions';
import { blue, white } from '../utils/colors';

// TODO
function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn
      }
    >
      <Text style={styles.submitBtnText}>SUBMIT</Text>
    </TouchableOpacity>
  );
}

class AddDeck extends Component {
  state = {
    text: '',
  };
  submit = () => {
    const entry = this.state;
    const { decks } = this.props;

    // console.log('on submit', entry); //{text: "Fred"}

    if (decks[entry.text]) {
      Alert.alert(
        'Deck Exists',
        'Aborting! A deck with that name already exists'
      );
      return;
    } else {
      const newDeck = { [entry.text]: { title: entry.text, questions: [] } };

      this.props.dispatch(addDeck(newDeck));
      createDeck(newDeck);

      Alert.alert(
        'Deck Created',
        'Congratulations! You have a new deck named:' + entry.text
      );
      this.setState({ text: '' });
      return;
    }
  };
  render() {
    const { text } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text>New Deck Name:</Text>
        <TextInput
          value={text}
          style={styles.input}
          onChangeText={text => this.setState({ text })}
        />
        <SubmitBtn onPress={this.submit} />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#7f7f7f',
    margin: 50,
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
export default connect(mapStateToProps)(AddDeck);
