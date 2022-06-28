import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import { SingleItemPage } from "./pages/singleItemPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/item/:id" element={<SingleItemPage />} />
      </Routes>
    </div>
  );
}

export default App;
