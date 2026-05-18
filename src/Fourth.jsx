import React, { useContext } from "react";
import { MyContext } from "./MyContext";

function Fourth() {
  var x = useContext(MyContext);
  console.log(x);
  return (
    <div className="border border-5 border-dark m-2 p-2">
      <h1>Fourth {x}</h1>
    </div>
  );
}

export default Fourth;
