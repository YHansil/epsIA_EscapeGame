<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import Enigme1 from './enigmes/Enigme1';
import Enigme2 from './enigmes/Enigme2';
import Enigme3 from './enigmes/Enigme3';

export default function EcranEnigme({ mission }) {
  const [etape, setEtape] = useState(1);
  const avancer = () => setEtape(etape + 1);

  return (
    <div className="ecran-enigme">
      {etape === 1 && <Enigme1 onComplete={avancer} />}
      {etape === 2 && <Enigme2 onComplete={avancer} />}
      {etape === 3 && <Enigme3 onComplete={avancer} />}
    </div>
  );
}
>>>>>>> 5dee8d7 (Maj--> finalisation puzzle + config enigme 2 et 3)
