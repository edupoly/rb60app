import First from "./First";
import { MyContext } from "./MyContext";

function App() {
  var x = "praveen";
  return (
    <MyContext.Provider value={x}>
      <div className="border border-5 border-success m-2 p-2">
        <h1>Hello App {x}</h1>
        <First></First>
      </div>
    </MyContext.Provider>
  );
}
export default App;
