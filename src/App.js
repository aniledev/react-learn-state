import "./App.css";
import TheDate from "./TheDate";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <h1>Setting, Reading, and Updating State</h1>
      <TheDate />
      {/* This is just to show that props and state can coexist */}
      <Counter step={3} />
    </div>
  );
}

export default App;
