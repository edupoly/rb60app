import Navbar from "./components/Navbar";
import Counter from "./Counter";
import Todolist from "./Todolist";
function App() {
  return (
    <div className="border border-5 border-success m-2 p-2">
      <Navbar></Navbar>
      <Counter></Counter>
      <Todolist></Todolist>
    </div>
  );
}
export default App;
