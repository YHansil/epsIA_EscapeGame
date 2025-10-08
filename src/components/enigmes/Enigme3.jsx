import React, { useState } from 'react';

export default function Enigme3({ onComplete }) {
  const [valeur, setValeur] = useState('');
  const [message, setMessage] = useState('');

  const verifier = () => {
    if (valeur.toUpperCase() === 'NORD') {
      setMessage('✅ Latitude complète : 74°01’7.14’’N');
      onComplete();
    } else {
      setMessage('❌ Erreur. Essaie encore.');
    }
  };

  return (
    <div className="enigme">
      <h2>🧩 ÉNIGME 3 — LE CODE DU GIVRE</h2>
      <p>Déchiffre le code César et entre la direction correcte.</p>
      <input
        type="text"
        value={valeur}
        onChange={(e) => setValeur(e.target.value)}
        placeholder="Entre la direction..."
      />
      <button onClick={verifier}>Valider</button>
      <p>{message}</p>
    </div>
  );
}