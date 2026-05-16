import React from "react";
function Counter(props) {
  //state
  var [c, setC] = React.useState(props.i);

  //action
  function inc() {
    setC(c + props.s);
  }
  function dec() {
    setC(c - props.s);
  }
  function reset() {
    setC(0);
  }
  //UI
  return (
    <div className="border border-5 border-primary m-2 p-2">
      <h1>
        {props.r}
        {c}
      </h1>
      <button
        onClick={() => {
          inc();
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dec();
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
    </div>
  );
}
export default Counter;
