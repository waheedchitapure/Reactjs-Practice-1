import React from "react";
import './App.css';
import { useState } from "react";

function App() {

  const [counter, setCounter] = useState(0)

  const handleClick1 = () => {
    setCounter(counter + 1)
  }


  const handleClick2 = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <div className="conatiner">

        <h3 className="head">
          {counter}
        </h3>


        <div className="buttons">
          <button className="inc" onClick={handleClick1} >
            Increment
          </button>
          <button className="dec" onClick={handleClick2}>
            Decrement
          </button>
        </div>

      </div>

    </>
  );
}

export default App;