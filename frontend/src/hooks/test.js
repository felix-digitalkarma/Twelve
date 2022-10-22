import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <p>{counter}</p>
      <button onClick={setCounter(counter + 1)}>Click Me</button>
    </div>
  );
};

export default Counter;
