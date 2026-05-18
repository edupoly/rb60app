import { useEffect } from "react";
import Counter from "./Counter";
import Products from "./Products";
function App() {
  return (
    <div className="border border-5 border-success m-2 p-2">
      <h1>Hello App</h1>
      <Counter></Counter>
      <Products></Products>
    </div>
  );
}
export default App;
