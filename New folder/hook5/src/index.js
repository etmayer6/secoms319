import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom/client";
import tshirt from "./tshirt.jpg";
// init React :
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
// Component :
function Counter() {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {console.log("Render");}, [message,counter]);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <img src={tshirt} alt="image" width={150} />
      
      <button onClick={() => setCounter(counter + 1)}>Add</button>
      <button onClick={() => setCounter(counter - 1)}>Subtract</button>
      <button onClick={() => setCounter(100)}>Set</button>
      <hr></hr>
      <input
        onChange={(e) => {setMessage(e.target.value); console.log(e.target.value);}}></input>
      <button onClick={() => alert("Message :" + message)}>Show its</button>
    </div>
  );
}
// render something HTML :
root.render(
  <div>
    <Counter />
  </div>
);
