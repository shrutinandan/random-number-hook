import React from "react";
import { useRandomNumber } from "use-random-number";

function Example() {
  const [randomNum, getRandomNumber, initValue] = useRandomNumber();

  return (
    <div>
      Random Number: {randomNum}
      <button type="button" onClick={getRandomNumber}>
        Random Number
      </button>
      <button type="button" onClick={initValue}>
        Initial Value: {initValue}
      </button>
    </div>
  );
}
export default Example;
