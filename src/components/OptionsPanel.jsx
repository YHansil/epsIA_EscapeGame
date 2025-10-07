// ============================
// ⚙️ OptionsPanel.jsx
// ============================

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function OptionsPanel() {
  const navigate = useNavigate();

  // États locaux pour les paramètres utilisateur
  const [volume, setVolume] = useState(
    Number(localStorage.getItem("volume")) || 50
  );
  const [subtitles, setSubtitles] = useState(
    localStorage.getItem("subtitles") === "true"
  );

  // Sauvegarde automatique
  useEffect(() => {
    localStorage.setItem("volume", volume);
    localStorage.setItem("subtitles", subtitles);
  }, [volume, subtitles]);

  return (
    <div className="options-container">
      <h2>⚙️ Options du jeu</h2>

      <div className="option">
        <label>Volume général : {volume}%</label>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
        />
      </div>

      <div className="option">
        <label>
          <input
            type="checkbox"
            checked={subtitles}
            onChange={() => setSubtitles(!subtitles)}
          />
          Activer les sous-titres / indices
        </label>
      </div>

      <button className="btn-retour" onClick={() => navigate("/")}>
        ← Retour au menu
      </button>
    </div>
  );
}
