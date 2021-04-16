import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = ({ guessedWords }) => (
  <div data-test="guessed-words-wrapper">
    {!guessedWords.length
      ? (
        <span data-test="instructions">
          Try to guess the secret word!
        </span>
      )
      : (
        <div data-test="guessed-words">
          <h3>Guessed Words</h3>

          <table>
            <thead>
              <tr>
                <th>Guess</th>
                <th>Matching letter</th>
              </tr>
            </thead>

            <tbody>
              {guessedWords.map((word, idx) => (
                <tr key={idx} data-test="guessed-word">
                  <td>{word.guessedWord}</td>
                  <td>{word.letterMatchCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }
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
