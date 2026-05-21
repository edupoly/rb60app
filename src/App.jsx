import Counter from "./features/counter/Counter";
import Todolist from "./features/todolist/Todolist";

function App() {
  return (
    <div className="border border-5 border-success m-2 p-2">
      <h1>Hello App</h1>
      <Counter></Counter>
      <Todolist></Todolist>
    </div>
  );
}
export default App;
