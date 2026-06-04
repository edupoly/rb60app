import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./todoSlice";
import { useAddTodoMutation, useGetUserTodosQuery } from "../../services/todos";

function Todolist() {
  var { user } = useSelector((state) => state.userR);
  var [ntd, setNtd] = useState("");
  var [addTodoFn] = useAddTodoMutation();
  var { isLoading, data } = useGetUserTodosQuery(user.username);
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
          addTodoFn({ title: ntd, username: user.username });
        }}
      >
        Add todo
      </button>
      <ul>
        {data?.map((todo, i) => {
          return (
            <li key={i}>
              {todo.title}
              <button onClick={() => {}}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todolist;
