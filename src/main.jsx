// ==========================
// 🧠 main.jsx – Point d'entrée principal du jeu
// ==========================

import React from "react"; //Active la bibliothèque React.
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// ==========================
// 🎮 Initialisation du jeu
// ==========================

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
