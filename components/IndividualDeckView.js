import React, { Component } from 'react';
import TextButton from './TextButton';
import { connect } from 'react-redux';

import {
  View,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { gray, blue, purple, white } from '../utils/colors';

// TODO
function TxBtn({ tx, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn
      }
    >
      <Text style={styles.submitBtnText}>{tx}</Text>
    </TouchableOpacity>
  );
}

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
        <View>
          <Text style={{ fontSize: 20 }}>{title}</Text>
          <Text style={{ fontSize: 16, color: gray }}>
            cards: {questions.length}
          </Text>
        </View>
        <TxBtn
          tx={'Add Card'}
          onPress={() => {
            this.props.navigation.navigate('NewQuestionView', {
              title,
              questions,
            });
          }}
        />
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

export default connect(mapStateToProps)(IndivdualDeckView);
