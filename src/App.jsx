import BillingDashboard from "./features/billing/BillingDashboard";
import Counter from "./features/counter/Counter";
import AddEmployee from "./features/employee/AddEmployee";
import Recipes from "./features/recipes/Recipes";
import Todolist from "./features/todolist/Todolist";

function App() {
  return (
    <div className="border border-5 border-success m-2 p-2">
      <h1>Hello App</h1>
      <AddEmployee></AddEmployee>
      {/* <Recipes></Recipes>
      <BillingDashboard></BillingDashboard>
      <Counter></Counter>
      <Todolist></Todolist> */}
    </div>
  );
}
export default App;
