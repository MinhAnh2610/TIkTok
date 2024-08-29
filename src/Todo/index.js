import { useReducer, useRef } from "react";
import reducer, {initState} from "./reducer";
import { addJob, deleteJob, setJob } from "./actions";
import logger from "./logger";

function App() { 
  const [state, dispatch] = useReducer(logger(reducer), initState);
  const { job, jobs } = state;

  const inputRef = useRef();

  const handleSubmit = () => {
    dispatch(addJob());
    inputRef.current.focus();
  };
  return (
    <div className="App">
      <h3>To do list</h3>
      <input
        value={job}
        placeholder="Entry task"
        ref={inputRef}
        onChange={(e) => dispatch(setJob(e.target.value))}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index} onClick={() => dispatch(deleteJob(index))}>
            {job}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
