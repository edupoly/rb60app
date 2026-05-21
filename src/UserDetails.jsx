import React from "react";
import { useLocation } from "react-router-dom";

function UserDetails() {
  var x = useLocation();
  console.log(x);
  return (
    <div>
      <h1>{x.state.firstName} UserDetails</h1>
    </div>
  );
}

export default UserDetails;
