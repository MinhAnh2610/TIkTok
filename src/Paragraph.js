import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
function Paragraph() {
  const context = useContext(ThemeContext);
  return (
    <div className={context.theme}>
      Context provides a way to pass data through the tree without having to
      pass props down manually at every level.
    </div>
  );
}

export default Paragraph;
