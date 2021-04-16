import React from 'react';
import { shallow } from 'enzyme';

import GuessedWords from "./GuessedWords";
import { findByTestAttr, checkProps } from '../../test/testUtils';

const defaultProps = {
  guessedWords: [
    {
      guessedWord: 'train',
      letterMatchCount: 3
    }
  ]
};

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords { ...setupProps } />)
}

describe('Guessed Words', () => {
  let wrapper;

  it('should not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps);
  });

  describe('if there are no words guessed', () => {
    beforeEach(() => {
      wrapper = setup({ guessedWords: [] });
    })

    it('should render without error', () => {
      const guessedWordsWrapper = findByTestAttr(wrapper, 'guessed-words-wrapper')
      expect(guessedWordsWrapper.length).toBe(1);
    });

    it('should render instructions to guess a word', () => {
      const instructions = findByTestAttr(wrapper, 'instructions').text();
      expect(instructions).toBe('Try to guess the secret word!');
    });
  })

  describe('if there are words guessed', () => {
    let guessedWords = [
      { guessedWord: 'train', letterMatchCount: 3 },
      { guessedWord: 'agile', letterMatchCount: 1 },
      { guessedWord: 'party', letterMatchCount: 5 },
    ];

    beforeEach(() => {
      wrapper = setup({ guessedWords });
    })

    it('should render without error', () => {
      const guessedWordsWrapper = findByTestAttr(wrapper, 'guessed-words-wrapper');
      expect(guessedWordsWrapper.length).toBe(1);
    });

    it('should render "guess words" section', () => {
      const guessedWords = findByTestAttr(wrapper, 'guessed-words');
      expect(guessedWords.length).toBe(1);
    });

    it('should render correct number of guessed words', () => {
      const guessedWord = findByTestAttr(wrapper, 'guessed-word');
      expect(guessedWord.length).toBe(guessedWords.length);
    });
  })
})
