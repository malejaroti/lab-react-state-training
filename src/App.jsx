import "./App.css";
import LikeButton from "./components/LikeButton";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <div className="buttons-row">
      <LikeButton />
      <LikeButton />
      </div>
    </div>
  );
}

export default App;
