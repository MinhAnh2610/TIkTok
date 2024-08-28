import "./App.css";
import { useState, memo } from "react";
import Content from "./Content";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <Content/>
      <h1>Count: {count}</h1>
      <button onClick={increase}>Click me😊</button>
    </div>
  );
}

export default App;
