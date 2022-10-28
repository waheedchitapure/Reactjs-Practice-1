import React from "react";
import "./App.css";
import { useState } from "react";


export const App = () => {
  const [counter, SetCounter] = useState(0);

  const handleClick1 = () => {
    SetCounter(counter + 1)
  }

  const handleClick2 = () => {
    SetCounter(counter - 1)
  }
  return (
    <>
      <div className="main">

        <div className="conatiner">

          <h1>
            This is the Counter Example
          </h1>

          <h3 style={{ marginTop: "60px " }}>
            {counter}
          </h3>

          <div
            style={{
              marginTop: '50px'
            }}
            className="buttons">
            <button className="inc" onClick={handleClick1}> Increment</button>
            <button className="dec" onClick={handleClick2}> Decrement</button>

          </div>



        </div>
      </div>
    </>
  )
}