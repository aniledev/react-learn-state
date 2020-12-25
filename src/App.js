import "./App.css";
import TheDate from "./TheDate";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <TheDate />
      {/* This is just to show that props and state can coexist */}
      <Counter step={1} />
    </div>
  );
}

export default App;
