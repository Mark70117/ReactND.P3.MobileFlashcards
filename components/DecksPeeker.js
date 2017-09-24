import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { receiveDecks, addDeck } from '../actions';
import { fetchDecks } from '../utils/api';

class DecksPeeker extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    fetchDecks()
      .then(decks => dispatch(receiveDecks(decks)))
      .then(dd => {
        /* do something */
      })
      .then(() => this.setState(() => ({ ready: true })));
  }
  render() {
    const { decks } = this.props;
    return (
      <View>
        <FlatList
          data={Object.keys(decks)}
          renderItem={({ item }) => <Text>{item}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    decks: state,
  };
}

export default connect(mapStateToProps)(DecksPeeker);
