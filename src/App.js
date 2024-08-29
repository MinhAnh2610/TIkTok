import "./App.css";
import { useRef } from "react";
import Video from "./videos/Video";
function App() {
  const videoRef = useRef();
  const handlePlay = () => {
    videoRef.current.play();
  }
  const handlePause = () => {
    videoRef.current.pause();
  }
  return (
    <div className="App">
      <Video ref={videoRef} />
      <br />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}

export default App;
