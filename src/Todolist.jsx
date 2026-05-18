import React, { useEffect, useState, useRef } from "react";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";

function Todolist() {
  var [todos, setTodos] = React.useState([
    {
      title: "first todo",
      status: false,
      id: uuidv4(),
    },
    {
      title: "doosra todo",
      status: true,
      id: uuidv4(),
    },
    {
      title: "mudo todo",
      status: false,
      id: uuidv4(),
    },
    {
      title: "4th todos",
      status: false,
      id: uuidv4(),
    },
  ]);
  var [ntd, setNtd] = useState("");
  var ipref = useRef();
  var btref = useRef();
  function addTodo() {
    setTodos([...todos, { title: ntd, status: false, id: uuidv4() }]);
  }

  var deleteTodo = React.useCallback(function (id) {
    // var temp = [...todos];
    // temp.splice(index, 1);
    // setTodos([...temp]);
    setTodos((ctodos) => {
      return ctodos.filter((t, i) => {
        return id != t.id;
      });
    });
  }, []);
  useEffect(() => {
    ipref.current.focus();
  }, []);
  function checkEnter(k) {
    if (k == "Enter") {
      btref.current.focus();
    }
  }
  return (
    <div className="border border-5 border-secondary m-2 p-2">
      <h1>Todolist</h1>
      <input
        type="text"
        ref={ipref}
        onKeyUp={(ev) => {
          checkEnter(ev.key);
        }}
        onChange={(ev) => {
          setNtd(ev.target.value);
        }}
      />
      <button
        onClick={() => {
          addTodo();
        }}
        ref={btref}
      >
        Add Todo
      </button>
      <ul className="list-unstyled m-0">
        {todos.map((t, i) => {
          return <Todo t={t} deleteTodo={deleteTodo} i={i} key={t.id}></Todo>;
        })}
      </ul>
    </div>
  );
}

export default Todolist;
