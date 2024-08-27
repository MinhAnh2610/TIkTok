import "./App.css";
import { useState } from "react";

function App() {
  const [info, setInfo] = useState({
    name: "Soybean",
    age: 18,
    address: "Beijing",
  });

  const handleUpdate = () => {
    setInfo({
      ...info,
      bio: "I Love Pink",
    });
  };
  return (
    <div className="App">
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default App;
