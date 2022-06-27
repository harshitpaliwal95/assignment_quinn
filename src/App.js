import "./App.css";
import { DragButton } from "./components/dragButton";
import { DropOver } from "./components/dropOver";

function App() {
  return (
    <div className="App">
      <div className="grid-two">
        <div className="copy-comp">
          <DragButton text={"Button"} />
        </div>
        <DropOver />
      </div>
    </div>
  );
}

export default App;
