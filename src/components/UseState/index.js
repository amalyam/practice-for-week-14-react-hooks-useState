import "./UseState.css";
import { useState } from "react";
import classNames from "../../utilities/classNames";

const UseState = () => {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);

  return (
    <div className={classNames([theme, "state"])}>
      <h1>UseState Component</h1>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </button>
      <h1>{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
    </div>
  );
};

export default UseState;
