const Congrats = ({ success }) => (
  <>
    <div data-test="congrats-message">
      {success && 'Congratulations! You guessed the word!'}
    </div>;
  </>
)

export default Congrats;
