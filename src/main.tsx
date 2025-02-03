import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import TicTacToe from "./components/TicTacToe.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <TicTacToe />
    </div>
  </StrictMode>
);
