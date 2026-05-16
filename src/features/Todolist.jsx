import React from "react";

function Todolist(props) {
  console.log(props);
  var [todos, setTodos] = React.useState([]);
  var [ntd, setNtd] = React.useState("");

  function addTodo() {
    setTodos([...todos, ntd]);
    document.getElementById("d1").value = "";
  }

  return (
    <div className="border border-5 border-secondary m-2 p-2">
      <h1>Todolist</h1>
      <button
        onClick={() => {
          props.abc(876);
        }}
      >
        some button
      </button>
      <br />
      <br />
      {/*  */}
      <input
        type="text"
        id="d1"
        onChange={(ev) => {
          setNtd(ev.target.value);
        }}
      />
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
