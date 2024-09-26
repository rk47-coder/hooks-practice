import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [direction, setDirection] = useState("inc")

  const changeState = () => {
    if (direction == "inc") {
      setCount(count + 1);

      if (count + 1 == 10) {
        setDirection("dec");
      } 
    } else {
      setCount(count - 1);

      if (count - 1 == 0) {  
        setDirection("inc");
      } 
    }
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={changeState}>
        {direction == "inc" ? "increment" : "decrement"}
      </button>  
    </div>
  );
}
export default Counter;
