import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function EcranEnigme({ enigmes, progression, setProgression, onNext }) {
  const { id } = useParams();
  const enigme = enigmes[id];
  const [reponse, setReponse] = useState("");
  const [message, setMessage] = useState("");

  if (!enigme) return <p>Chargement...</p>;

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
      <input
        type="text"
        value={reponse}
        onChange={(e) => setReponse(e.target.value)}
        placeholder="Entre ta réponse..."
      />
      <button onClick={verifierReponse}>Valider</button>
      {message && <p className="feedback">{message}</p>}
    </div>
  );
}
