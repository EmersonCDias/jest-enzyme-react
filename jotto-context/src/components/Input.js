import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Input = ({ success, secretWord }) => {
  const [currentGuess, setCurrentGuess] = useState("");

  return (
    <>
      {!success && (
        <div data-test="input">
          <form className="form-inline">
            <input
              data-test="input-box"
              type="text"
              className="mb-2 mx-sm-3"
              placeholder="enter guess"
              value={currentGuess}
              onChange={({ target }) => setCurrentGuess(target.value)}
            />

            <button
              onClick={e => {
                e.preventDefault();
                setCurrentGuess("");
              }}
              data-test="submit-button"
              className="btn btn-primary mb-2"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  )
}
Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
  success:  PropTypes.bool.isRequired,
}

export default Input;
