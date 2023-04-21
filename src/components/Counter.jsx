import React from "react";

const Counter = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.counter}</h1>
      <button onClick={props.inc}>+</button>
      <button onClick={props.dec}>-</button>
    </div>
  );
};

export default Counter;
