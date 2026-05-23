import React from "react";

import Billing from "./Billing";
import Products from "./Products";

function BillingDashboard() {
  return (
    <div>
      <h1>Billing-dashboard</h1>
      <div className="d-flex">
        <div style={{ width: "65%" }} className="border border-3">
          <Products></Products>
        </div>
        <div className="border border-2 m-2 p-2 flex-grow-1">
          <Billing></Billing>
        </div>
      </div>
    </div>
  );
}

export default BillingDashboard;
