import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment } from "./counterSlice";
function Counter() {
  var { count } = useSelector((state) => state.counterR);
  var dispatch = useDispatch();

  console.log(count);
  return (
    <div className="border border-5 border-danger m-2 p-2">
      <h1>Counter:{count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
