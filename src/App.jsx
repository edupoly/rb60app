import { Link, Outlet } from "react-router-dom";
function App() {
  return (
    <div className="border border-5 border-success m-2 p-2">
      <h1>Hello App</h1>
      <Link to="/counter">Counter</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/todolist">Todolist</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/products">Products</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/recipes">Recipes</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="/users">Users</Link>
      <Outlet></Outlet>
    </div>
  );
}
export default App;
