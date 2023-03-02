import "./UseState.css";
import { useState } from "react";
import classNames from "../../utilities/classNames";

const UseState = () => {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);

  const handleClickDark = () => {
    setTheme("dark");
  };
  const handleClickLight = () => {
    setTheme("light");
  };
  const handleClickIncrement = () => {
    setCount((count) => count + 1);
  };
  const handleClickDecrement = () => {
    setCount((count) => count - 1);
  };

  return (
    <div className={classNames(theme, "text")}>
      <h1>UseState Component</h1>
      <button onClick={handleClickLight}>Light</button>
      <button onClick={handleClickDark}>Dark</button>
      <h1>{count}</h1>
      <button onClick={handleClickIncrement}>Increment</button>
      <button onClick={handleClickDecrement}>Decrement</button>
    </div>
  );
};

export default UseState;
