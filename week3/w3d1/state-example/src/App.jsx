import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  // const [count, setCount] = useState(null);

  const handleClick = () => {
    setCount(1);
    setCount(count + 1);
    console.log("Clicked! Current count:", count);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increase count</button>
    </div>
  );
};

export default App;
