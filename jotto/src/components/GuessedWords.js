import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = ({ guessedWords }) => (
  <div data-test="guessed-words">
    {!guessedWords.length && (
      <span data-test="instructions">
        Try to guess the secret word!
      </span>
    )}
  </div>
)

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  )
}

export default GuessedWords
