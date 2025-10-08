// src/components/enigmes/Enigme3.jsx
import React, { useState, useEffect } from "react";

export default function Enigme3({ onComplete }) {
  const [step, setStep] = useState(1);
  const [valeur, setValeur] = useState("");
  const [message, setMessage] = useState("");
  const [journal, setJournal] = useState([
    "🧩 ÉNIGME 3 — LE CODE DU GIVRE",
    "Anomalie détectée : Balise Encrypted Quadrant.",
  ]);

  // Lecture de l’audio d’introduction
  useEffect(() => {
    const audio = new Audio("/audio/audio_enigme3/audio_intro.mp3");
    audio.play();

    setJournal((prev) => [
      ...prev,
      "🎧 Voix : “Tu joues avec mon passé… mais tu ignores ma langue.”",
      "🎧 Voix : “César n’était pas seulement un empereur. Il a laissé un héritage que même les machines utilisent encore.”",
      "🗒️ Journal : Analyse du message : référence probable à un chiffrement ancien — 'Code César'.",
    ]);
  }, []);

  // Tooltip info du Code César
  const [showTooltip, setShowTooltip] = useState(false);

  // Étape 1 : déchiffrer le mot “NORD”
  const verifierMot = () => {
    if (valeur.toUpperCase() === "NORD") {
      setMessage("✅ Mot correct : NORD — direction trouvée !");
      setJournal((prev) => [
        ...prev,
        "📡 Direction de la latitude découverte : Nord.",
        "🗒️ Journal : Il reste les secondes. Somme les entre elles et extrais la racine.",
      ]);
      setStep(2);
    } else {
      setMessage("❌ Mauvais mot. Réessaie le déchiffrement.");
      setJournal((prev) => [
        ...prev,
        "⚠️ Code erroné. Le décalage César n'est pas bon.",
      ]);
    }
  };

  // Étape 2 : calcul final (somme + racine)
  const verifierCalcul = () => {
    const num = parseFloat(valeur);
    if (Math.abs(num - 7.14) < 0.01) {
      setMessage("✅ Parfait ! Latitude complète : 74°01’7.14’’N");
      setJournal((prev) => [
        ...prev,
        "📡 Calcul validé. Alpha ROOT a reconstitué la latitude complète.",
        "❗ Les coordonnées 73°61’7.14’’N sont invalides...",
        "💡 Conversion géographique : 1° = 60′, 1′ = 60’’",
        "✅ Correction appliquée : 74°01’7.14’’N",
        "🎉 Mission Kremlin accomplie — passage à la mission Taj Mahal débloqué.",
      ]);
      const audio = new Audio("/audio/audio_post_mission/audio_success.mp3");
      audio.play();
      setTimeout(() => onComplete(), 4000);
    } else {
      setMessage("❌ Mauvais calcul. Vérifie la racine de la somme des lettres.");
      setJournal((prev) => [
        ...prev,
        "⚠️ Anomalie : donnée incohérente, recalcul recommandé.",
      ]);
    }
  };

  // Calcule la valeur alphabétique d'une lettre
  const valeurAlphabetique = (lettre) =>
    lettre.toUpperCase().charCodeAt(0) - 64; // A=1, B=2...

  return (
    <div className="enigme-container">
      <h2>🧩 ÉNIGME 3 — LE CODE DU GIVRE</h2>

      <div className="enigme3-section">
        <p>
          “Tu joues avec mon passé… mais tu ignores ma langue.
          <br />
          <span
            className="mot-cesar"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            César
          </span>{" "}
          n’était pas seulement un empereur.
          <br />
          Il a laissé un héritage que même les machines utilisent encore.”
        </p>

        {showTooltip && (
          <div className="tooltip-cesar">
            🔐 <b>Code César</b> : système de chiffrement à décalage alphabétique.
            <br />
            Exemple avec un pas de 3 : A → D, B → E, C → F...
            <br />
            Pour déchiffrer, on inverse le décalage.
          </div>
        )}
      </div>

      {/* Étape 1 : trouver le mot NORD */}
      {step === 1 && (
        <div className="zone-dechiffrement">
          <p>🧮 Déchiffre le mot caché à l’aide du code César.</p>
          <input
            type="text"
            value={valeur}
            onChange={(e) => setValeur(e.target.value)}
            placeholder="Entre le mot..."
          />
          <button onClick={verifierMot}>Valider</button>
          <p className="message">{message}</p>
        </div>
      )}

      {/* Étape 2 : calcul final */}
      {step === 2 && (
        <div className="zone-calcul">
          <p>
            Calcule la valeur alphabétique de chaque lettre du mot NORD :
            <br />
            N=14, O=15, R=18, D=4 → somme = 51
          </p>
          <p>
            Extrais la racine de 51 → √51 ≈ <b>7.14</b>
          </p>
          <input
            type="number"
            step="0.01"
            value={valeur}
            onChange={(e) => setValeur(e.target.value)}
            placeholder="Entre le résultat..."
          />
          <button onClick={verifierCalcul}>Valider</button>
          <p className="message">{message}</p>
        </div>
      )}

      {/* Journal de bord */}
      <div className="journal">
        {journal.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}
