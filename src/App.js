import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import { SavedCanvas } from "./pages/savedCanvas";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/item/:id" element={<SavedCanvas />} />
      </Routes>
    </div>
  );
}

export default App;
