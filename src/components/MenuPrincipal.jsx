<<<<<<< HEAD
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
=======
import React from 'react';

export default function MenuPrincipal({ onJouer }) {
  return (
    <div className="menu-principal">
      <h1>EPSIA</h1>
      <h2>Éradication Planifiée par Système d’IA</h2>
      <button onClick={onJouer}>▶ Jouer</button>
      <button>⚙ Options</button>
    </div>
  );
}
>>>>>>> 5dee8d7 (Maj--> finalisation puzzle + config enigme 2 et 3)
