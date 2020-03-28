import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [result, setResult] = useState("");
  const [style, setStyle] = useState({ color: "#00f" });
  const [imgDisplay, setImgDisplay] = useState(false)

  const handleChange = e => {
    setName(e.target.value);
  };

  const handleBlur = () => {};
  const handleKeyUp = () => {
    name === "Michelle"
      ? setStyle({ ...style, color: "#008000" })
      : setStyle({ ...style, color: "#f00" });
    name === "Michelle" ? setResult("right!") : setResult("");
    name === "Michelle" ? setImgDisplay(true) : setImgDisplay(false)
  };

  return (
    <div className="App">
      <form>
        <label>Your favorite person</label>
        <input
          style={style}
          value={name}
          onChange={e => handleChange(e)}
          onKeyUp={handleKeyUp}
          // onChange={e => setName(e.target.value)}
          onBlur={handleBlur}
        />
      </form>
      <div>Result: {result}</div>
      <img className={imgDisplay? "show" : "hide"} src="https://i.imgur.com/hXiPsql.png"/>
    </div>
  );
}
