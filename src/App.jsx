import Navbar from "./components/Navbar";
import Counter from "./features/Counter";
import Todolist from "./features/Todolist";
function App() {
  var r = "raveena";

  function abc() {
    alert("hi");
  }

  return (
    <div className="border border-5 border-success m-2 p-2">
      <Navbar></Navbar>
      <Counter i={20} s={5} r={r}></Counter>
      <Counter i={34} s={100} r={r}></Counter>

      <Todolist abc={abc}></Todolist>
      <Todolist abc={abc}></Todolist>
    </div>
  );
}
export default App;
