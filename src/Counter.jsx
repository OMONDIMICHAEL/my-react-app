import React, { useState} from "react";

const Counter = () => {
    const [count,setCount] = useState(0);
    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => setCount(count-1);
    return (
    <div style={{ margin: '20px' }}>
      <h2>Counter: {count}</h2>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement} style={{ marginLeft: '10px' }}>+</button>
    </div>
  );
};

export default Counter;