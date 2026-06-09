import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import Login from "./features/user/Login.jsx";
import Todolist from "./features/todolist/Todolist.jsx";
import Counter from "./features/counter/Counter.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Uploadform from "./features/fileupload/uploadform.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/counter",
        element: <Counter></Counter>,
      },
      {
        path: "/uploadform",
        element: <Uploadform></Uploadform>,
      },
      {
        path: "/todolist",
        element: <Todolist></Todolist>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
