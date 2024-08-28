import "./App.css";
import { useState, memo, useCallback } from "react";
import Content from "./Content";

function App() {
  const [count, setCount] = useState(0);

  const increase = useCallback(() => {
    setCount((count) => count + 1);
  }, []);
  return (
    <div className="App">
      <Content onIncrease={increase} />
      <h1>Count: {count}</h1>
    </div>
  );
}

export default App;
