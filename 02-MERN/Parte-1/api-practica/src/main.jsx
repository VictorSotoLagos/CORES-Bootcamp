import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DataContextComponent } from "./contexts/DataContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataContextComponent>
      <App />
    </DataContextComponent>
  </StrictMode>
);
