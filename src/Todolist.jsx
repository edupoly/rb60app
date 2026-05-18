import React, { useState } from "react";
import Todo from "./Todo";
function Todolist() {
  var [todos, setTodos] = React.useState([
    "first todo",
    "doosra todo",
    "mudo todo",
    "4th todos",
  ]);
  var [ntd, setNtd] = useState("");

  function addTodo() {
    setTodos([...todos, ntd]);
  }
  var deleteTodo = React.useCallback(function (index) {
    // var temp = [...todos];
    // temp.splice(index, 1);
    // setTodos([...temp]);
    setTodos((ctodos) => {
      return ctodos.filter((t, i) => {
        return index != i;
      });
    });
  }, []);
  return (
    <div className="border border-5 border-secondary m-2 p-2">
      <h1>Todolist</h1>
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
      <ul className="list-unstyled m-0">
        {todos.map((t, i) => {
          return <Todo t={t} deleteTodo={deleteTodo} i={i} key={i}></Todo>;
        })}
      </ul>
    </div>
  );
}

export default Todolist;
