import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Art from "./components/Art";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/Art/:idObra" element={<Art />} />
      </Routes>
    </Router>
  );
};
export default App;
