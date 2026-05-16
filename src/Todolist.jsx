import React from "react";

function Todolist() {
  var [todos, setTodos] = React.useState([]);

  function addTodo() {
    setTodos([...todos, document.getElementById("d1").value]);
  }

  return (
    <div className="border border-5 border-secondary m-2 p-2">
      <h1>Todolist</h1>
      <input type="text" id="d1" />
      <button
        onClick={() => {
          addTodo();
        }}
      >
        Add Todo
      </button>
      <ul>
        {todos.map((t) => {
          return <li>{t}</li>;
        })}
      </ul>
    </div>
  );
}

export default Todolist;
