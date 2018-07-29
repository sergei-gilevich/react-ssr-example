import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import data from './data/data.json';

const initialState = {
  cards: []
}

// Actions
export const initialCards = () => {
  return {
    type: 'INIT_CARDS',
    cards: data
  }
};

export const addItem = item => {
  return {
    type: "ADD_CARD",
    item
  }
};

// reducers
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_CARDS':
      return {
        cards: action.cards
      }
    case 'ADD_CARD':
      return {
        ...state,
        cards: [...state.cards, action.item]
      }
    default:
      return state
  }
}

//create store
export const initStore = initialState  => {
  return createStore(reducer, initialState, composeWithDevTools
    (applyMiddleware(thunkMiddleware)));
}