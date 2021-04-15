import React, { useCallback, useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [error, setError] = useState(false);

  const handleCounter = useCallback(num => {
    if (counter + num >= 0) {
      setCounter(counter + num);
      setError(false);
    } else {
      setError(true);
    }
  }, [counter]);

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        The counter is currently&nbsp;
        <span data-test="counter">{counter}</span>
      </h1>

      <button
        data-test="decrement-button"
        onClick={() => handleCounter(-1)}
      >
        Decrement counter
      </button>

      <button
        data-test="increment-button"
        onClick={() => handleCounter(1)}
      >
        Increment counter
      </button>

      {error && (
        <div data-test="error-message">
          Counter can not be less than 0
        </div>
      )}
    </div>
  );
}

export default App;
