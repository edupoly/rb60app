import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./todoSlice";

function Todolist() {
  var { todos } = useSelector((state) => state.todolistR);
  var [ntd, setNtd] = useState("");
  var dispatch = useDispatch();

  return (
    <div className="border border-5 border-primary m-2 p-2">
      <h1>Todolist</h1>
      <input
        type="text"
        onChange={(e) => {
          setNtd(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(addTodo(ntd));
        }}
      >
        Add todo
      </button>
      <ul>
        {todos.map((todo, i) => {
          return (
            <li key={i}>
              {todo}
              <button
                onClick={() => {
                  dispatch(deleteTodo(i));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todolist;
