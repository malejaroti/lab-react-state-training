import "./App.css";
import ClickablePicture from "./components/ClickablePicture";
import Counter from "./components/Counter";
import Dice from "./components/Dice";
import DiscoButton from "./components/DiscoButton";
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

      <ClickablePicture/>
      <Dice />

      <div className="buttons-row">
      <DiscoButton />
      <DiscoButton />
      </div>
    </div>
  );
}

export default App;
