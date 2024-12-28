import { useState } from "react";
import "./App.css";
import Pexel from "./components/pexel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Pexel />
    </>
  );
}

export default App;
