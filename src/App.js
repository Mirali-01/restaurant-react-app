import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Drinks from "./pages/Drinks";
import Meals from "./pages/Meals";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/meals" element={<Meals />} />
      </Routes>
    </div>
  );
}

export default App;
