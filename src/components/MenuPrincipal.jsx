import React from "react";
import { useNavigate } from "react-router-dom";

export default function MenuPrincipal({ onStart }) {
  const navigate = useNavigate();

  return (
    <div className="menu-principal">
      <h1>🛰️ Agents du Globe — Alpha ROOT</h1>
      <button onClick={onStart}>Jouer</button>
      <button onClick={() => navigate("/options")}>Options</button>
      <p>© 2025 — Projet éducatif EPSIA</p>
    </div>
  );
}
