import { AsyncStorage } from 'react-native';
import { formatDecks, DECKS_STORAGE_KEY } from './decks';

export function fetchDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(r => formatDecks(r));
}

export function createDeck({ deckName }) {
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [deckName]: { title: deckName, questions: [] },
    })
  );
}

export function addCardDeck({ card, deckName }) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
    newQuestions = result[deckName].questions.push(card);
    AsyncStorage.mergeItem(
      DECKS_STORAGE_KEY,
      JSON.stringify({
        [deckName]: { title: deckName, questions: [] },
      })
    );
  });
}
