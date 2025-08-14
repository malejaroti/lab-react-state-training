import "./App.css";
import Counter from "./components/Counter";
import LikeButton from "./components/LikeButton";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <div className="buttons-row">
      <LikeButton />
      <LikeButton />
      </div>

      <Counter />
    </div>
  );
}

export default App;
