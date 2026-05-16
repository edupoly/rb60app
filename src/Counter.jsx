import React from "react";
function Counter() {
  //state
  var [c, setC] = React.useState(0);

  //action
  function inc() {
    setC(c + 1);
  }
  function dec() {
    setC(c - 1);
  }
  function reset() {
    setC(0);
  }
  //UI
  return (
    <div className="border border-5 border-primary m-2 p-2">
      <h1>{c}</h1>
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
