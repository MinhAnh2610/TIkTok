import { useEffect, useState } from "react";

function Content() {
  const [countDown, setCountDown] = useState(180);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>{countDown}</h1>
    </div>
  );
}

export default Content;
