import { useEffect, useState } from "react";

const lessons = [
  {
    id: 1,
    name: ".NET",
  },
  {
    id: 2,
    name: "ReactJS",
  },
  {
    id: 3,
    name: "JavaScript",
  },
];

function Content() {
  const [lessonId, setLessonId] = useState(1);

  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    };

    window.addEventListener(`lesson-${lessonId}`, handleComment);
    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment);
    };
  }, [lessonId]);
  return (
    <div>
      <ul>
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            style={{
              cursor: "pointer",
              color: lessonId === lesson.id ? "blue" : "red",
            }}
            onClick={() => setLessonId(lesson.id)}
          >
            {lesson.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
