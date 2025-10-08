<<<<<<< HEAD
// ==========================
// 🎮 App.jsx – Logique principale du jeu
// ==========================

import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

// Import des composants (on les créera ensuite)
import MenuPrincipal from "./components/MenuPrincipal.jsx";
import EcranEnigme from "./components/EcranEnigme.jsx";
import OptionsPanel from "./components/OptionsPanel.jsx";

export default function App() {
  const navigate = useNavigate();

  // ==========================
  // 🧠 États principaux
  // ==========================
  const [enigmes, setEnigmes] = useState([]);
  const [indexCourant, setIndexCourant] = useState(0);
  const [progression, setProgression] = useState(
    JSON.parse(localStorage.getItem("progression")) || {}
  );

  // ==========================
  // 📦 Chargement des énigmes JSON
  // ==========================
  useEffect(() => {
    fetch("/data/enigmes.json")
      .then((res) => res.json())
      .then((data) => setEnigmes(data))
      .catch((err) => console.error("Erreur chargement énigmes:", err));
  }, []);

  // ==========================
  // 💾 Sauvegarde automatique
  // ==========================
  useEffect(() => {
    localStorage.setItem("progression", JSON.stringify(progression));
  }, [progression]);

  // ==========================
  // 🎯 Gestion navigation
  // ==========================
  const demarrerJeu = () => {
    setIndexCourant(0);
    navigate("/enigme/0");
  };

  const prochaineEnigme = () => {
    if (indexCourant + 1 < enigmes.length) {
      const nextIndex = indexCourant + 1;
      setIndexCourant(nextIndex);
      navigate(`/enigme/${nextIndex}`);
    } else {
      alert("🎉 Mission accomplie !");
      navigate("/");
    }
  };

  // ==========================
  // 🧩 Rendu principal
  // ==========================
  return (
    <Routes>
      <Route path="/" element={<MenuPrincipal onStart={demarrerJeu} />} />
      <Route
        path="/enigme/:id"
        element={
          <EcranEnigme
            enigmes={enigmes}
            progression={progression}
            setProgression={setProgression}
            onNext={prochaineEnigme}
          />
        }
      />
      <Route path="/options" element={<OptionsPanel />} />
    </Routes>
  );
}
=======
import React, { useState } from 'react';
import MenuPrincipal from './components/MenuPrincipal';
import CarteMission from './components/CarteMission';
import EcranEnigme from './components/EcranEnigme';

export default function App() {
  const [etatJeu, setEtatJeu] = useState('menu'); // menu | carte | enigmes
  const [mission, setMission] = useState(null);

  const demarrerJeu = () => setEtatJeu('carte');
  const lancerMission = (zone) => {
    setMission(zone);
    setEtatJeu('enigmes');
  };

  return (
    <div className="app-container">
      {etatJeu === 'menu' && <MenuPrincipal onJouer={demarrerJeu} />}
      {etatJeu === 'carte' && <CarteMission onMissionSelect={lancerMission} />}
      {etatJeu === 'enigmes' && <EcranEnigme mission={mission} />}
    </div>
  );
}
>>>>>>> 5dee8d7 (Maj--> finalisation puzzle + config enigme 2 et 3)
