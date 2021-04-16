import React from 'react';
import PropTypes from 'prop-types';

const Congrats = ({ success }) => (
  <>
    {success && (
      <div
        className="alert alert-success"
        data-test="congrats-message"
      >
        Congratulations! You guessed the word!
      </div>
    )}
  </>
)

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
}

export default Congrats;
