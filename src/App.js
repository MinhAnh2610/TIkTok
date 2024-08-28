import "./App.css";
import { useReducer, useRef } from "react";

const initState = {
  job: "",
  jobs: [],
};
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};
const addJob = () => {
  return {
    type: ADD_JOB,
  };
};
const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, state.job],
        job: "",
      };
    case DELETE_JOB:
      return {
        ...state,
        jobs: state.jobs.filter((job, index) => index !== action.payload),
      };
    default:
      throw new Error("Invalid action");
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
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
