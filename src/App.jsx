import Navbar from "./components/Navbar";
import Counter from "./features/Counter";
import Todolist from "./features/Todolist";
function App() {
  return (
    <div className="border border-5 border-success m-2 p-2">
      <Navbar></Navbar>
      <Counter i={20} s={5}></Counter>
      <Counter i={34} s={100}></Counter>

      <Todolist name="moksha"></Todolist>
      <Todolist name="kayani"></Todolist>
      <Todolist name="Manas"></Todolist>
    </div>
  );
}
export default App;
