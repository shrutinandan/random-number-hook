import React from 'react'
import { useRandomNumber } from 'use-random-number';

function Example() {
  const [randomNum, getRandomNumber, initValue] = useRandomNumber();

  return (
    <div>
    Random Number: {randomNum}
    Initial Value: {initValue}
    <button type="button" onClick={getRandomNumber}>
      Random Number
    </button>
  </div>
  );
}
export default Example;