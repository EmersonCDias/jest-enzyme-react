import React from 'react';
import PropTypes from 'prop-types'

const Congrats = ({ success }) => (
  <>
    <div data-test="congrats-message">
      {success && 'Congratulations! You guessed the word!'}
    </div>;
  </>
)

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
}

export default Congrats;
