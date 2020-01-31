import React from "react";
import ReactDOM from "react-dom";
const fname = "Angela";
const lname = "Yu";
const num = 18;
ReactDOM.render(
  <div>
    <h1>Hello {`${fname} ${lname}`}!</h1>
    <p>My lucky number is {num}</p>
  </div>,

  document.getElementById("root")
);
