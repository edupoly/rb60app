import React from "react";
function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="mybox border-danger">
      <h1>Counter:{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Inc
      </button>
    </div>
  );
}
export default Counter;
