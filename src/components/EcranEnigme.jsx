// ===============================
// 🧩 EcranEnigme.jsx
// ===============================

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PuzzleImage from "./PuzzleImage.jsx"; // ✅ important

export default function EcranEnigme({ enigmes, progression, setProgression, onNext }) {
  const { id } = useParams();
  const enigme = enigmes[id];
  const [reponse, setReponse] = useState("");
  const [message, setMessage] = useState("");

  if (!enigme) return <p>Chargement...</p>;

  // ============================
  // 🧠 Vérification de la réponse
  // ============================
  const verifierReponse = () => {
    if (reponse.trim() === enigme.solution) {
      setMessage(enigme.feedback.success);
      setProgression({ ...progression, [enigme.id]: true });
      setTimeout(() => onNext(), 1500);
    } else {
      setMessage(enigme.feedback.fail);
    }
  };

  return (
    <div className="enigme-ecran">
      <h2>{enigme.titre}</h2>
      <p>{enigme.description}</p>

      {/* ============================
          🎮 Zone de puzzle ou champ texte
      ============================ */}
      {enigme.id === 3 ? (
        <PuzzleImage
          src="../public/image/image_tour.png"
          gridSize={3}
          onSolve={() => {
            alert("✅ Puzzle résolu !");
            setProgression({ ...progression, [enigme.id]: true });
            onNext();
          }}
        />
      ) : (
        <>
          <input
            type="text"
            value={reponse}
            onChange={(e) => setReponse(e.target.value)}
            placeholder="Entre ta réponse..."
          />
          <button onClick={verifierReponse}>Valider</button>
        </>
      )}

      {/* ============================
          💬 Feedback utilisateur
      ============================ */}
      {message && <p className="feedback">{message}</p>}
    </div>
  );
}
