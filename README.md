# use-random-number

> generate random number

[![NPM](https://img.shields.io/npm/v/use-random-number.svg)](https://www.npmjs.com/package/use-random-number) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-random-number
```

## Usage

```jsx
// import React, { Component } from 'react'

// import { useMyHook } from 'use-random-number'

// const Example = () => {
//   const example = useMyHook()
//   return (
//     <div>{example}</div>
//   )
// }
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

```

## License

MIT © [shrutinandan](https://github.com/shrutinandan)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
