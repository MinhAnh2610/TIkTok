import "./App.css";
import { useState } from "react";

const courses = [
  { id: 1, name: "Tiktok 101" },
  { id: 2, name: "Tiktok 102" },
  { id: 3, name: "Tiktok 103" },
];

function App() {
  const [courseId, setCourseId] = useState([]);

  const handleSubmit = () => {
    console.log(courseId);
  };
  const handleCheck = (id) => {
    setCourseId(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id)
      } else {
        return [...prev, id]
      }
    });
  };
  return (
    <div className="App">
      {courses.map((course) => (
        <div key={course.id}>
          {course.name}
          <input
            type="checkbox"
            checked={courseId.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          ></input>
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;
