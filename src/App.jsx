import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="border border-5 border-success m-2 p-2">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}
export default App;
