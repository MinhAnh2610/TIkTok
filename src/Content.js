import { memo } from "react";

function Content() {
  console.log("re-render");
  return (
    <div>
      <h1>Hello Bruhs</h1>
    </div>
  );
}

export default memo(Content);
