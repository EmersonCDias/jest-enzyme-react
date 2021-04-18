import React from 'react';
import { mount } from 'enzyme';

import App from "../../App";
import { findByTestAttr } from "../testUtils";

/**
 * Create wrapper with specified initial conditions,
 * then submit a guessed word of 'train'
 * @function
 * @param {object} state - Initial conditions
 * @return {Wrapper} - Enzyme wrapper of mounted App Component
*/

const setup = (state = {}) => {
  // TODO: apply state
  const wrapper = mount(<App />);

  // add value to input box
  const inputBox = findByTestAttr(wrapper, 'input-box');
  inputBox.simulate('change', { target: { value: 'train' } });

  // simulate clu=ick on submit button
  const submitButton = findByTestAttr(wrapper, 'submit-button');
  submitButton.simulate('click', { preventDefault() {} })

  return wrapper;
}

describe('no words guessed', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: []
    });
  })

  it('create GuessedWords table with one row', () => {
    const guessedWordRows = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordRows).toHaveLength(1);
  })
})

describe('some words guessed', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [
        { guessedWord: 'agile', letterMatchCount: 1 },
      ]
    });
  })

  it('create GuessedWords table with three rows', () => {
    const guessedWordRows = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordRows).toHaveLength(2);
  })
})

describe('guessed secret word', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [
        { guessedWord: 'party', letterMatchCount: 5 },
      ]
    });

    // add value to input box
    const inputBox = findByTestAttr(wrapper, 'input-box');
    inputBox.simulate('change', { target: { value: 'party' } });

    // simulate clu=ick on submit button
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', { preventDefault() {} })
  })

  it('adds row to guessedWords table,', () => {
    const guessedWordRows = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordRows).toHaveLength(3);
  })

  it('displays congrats component,', () => {
    const congratsMessage = findByTestAttr(wrapper, 'congrats-message').text();
    expect(congratsMessage).toBe('Congratulations! You guessed the word!');
  })

  it('does not display input component contents,', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box');
    expect(inputBox.exists()).toBe(false);

    const submitButton = findByTestAttr(wrapper, 'submit-button');
    expect(submitButton.exists()).toBe(false);
  })
})

// EXAMPLE OF TODO
describe('invalid word guess', () => {
  it.todo('not accept numbers');
})
