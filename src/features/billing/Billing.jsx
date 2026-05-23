import React from "react";
import { useSelector } from "react-redux";

function Billing() {
  const orders = useSelector((state) => state.billingR);
  console.log(orders);
  return (
    <div>
      <h3>Billing</h3>
      <h2>{orders?.orderedItems?.length}</h2>
    </div>
  );
}

export default Billing;
