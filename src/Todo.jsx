import React from "react";
function Todo(props) {
  console.log("Todo Rendered ", props.t);
  return (
    <li className="border p-2 my-2 border-2 border-dark rounded">
      <b className="mx-2">{props.t}</b>
      <button
        className="btn btn-danger me-2"
        onClick={() => {
          props.deleteTodo(props.i);
        }}
      >
        Delete
      </button>
      <button className="btn btn-primary me-2"> Undo</button>
      <button className="btn btn-warning me-2"> Done</button>
    </li>
  );
}

export default React.memo(Todo);
