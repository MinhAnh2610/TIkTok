import "./App.css";
import { useState } from "react";

function App() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("jobs"));
    return storageJobs || [];
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (job) {
      setJobs((jobs) => {
        const newJobs = [...jobs, job];
        const jsonJobs = JSON.stringify(newJobs);

        localStorage.setItem("jobs", jsonJobs);
        return newJobs;
      });
      setJob("");
    }
  };

  return (
    <div className="App">
      <input type="text" value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {jobs.map((job, index) => {
          return <li key={index}>{job}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
