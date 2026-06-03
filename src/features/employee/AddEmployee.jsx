import React from "react";
import { useAddNewEmployeeMutation } from "../../services/employees";

function AddEmployee() {
  var [addEmpFn] = useAddNewEmployeeMutation();
  function handleSubmit(ev) {
    ev.preventDefault();
    var fd = new FormData(ev.target);
    var details = {};
    details.firstName = fd.get("fname");
    details.email = fd.get("email");
    console.log(details);
    addEmpFn(details);
    // fetch("http://localhost:3500/addEmployee", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(details),
    // }).then((data) => console.log(data));
  }
  return (
    <div className="border border-5 border-success m-2 p-2">
      <h2>AddEmployee</h2>
      <form
        onSubmit={(ev) => {
          handleSubmit(ev);
        }}
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            name="fname"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Employee
        </button>
      </form>
    </div>
  );
}

export default AddEmployee;
