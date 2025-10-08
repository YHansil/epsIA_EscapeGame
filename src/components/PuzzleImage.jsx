<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import "./PuzzleImage.css";

export default function PuzzleImage({ src, gridSize = 3, onSolve }) {
  const [tiles, setTiles] = useState([]);
  const [emptyIndex, setEmptyIndex] = useState(gridSize * gridSize - 1);

  useEffect(() => {
    const tempTiles = Array.from({ length: gridSize * gridSize }, (_, i) => i);
    const shuffled = shuffleArray(tempTiles);
    setTiles(shuffled);
  }, [gridSize]);

  const shuffleArray = (array) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const handleTileClick = (index) => {
    const possibleMoves = getAdjacentIndexes(emptyIndex, gridSize);
    if (possibleMoves.includes(index)) {
      const newTiles = [...tiles];
      [newTiles[index], newTiles[emptyIndex]] = [
        newTiles[emptyIndex],
        newTiles[index],
      ];
      setTiles(newTiles);
      setEmptyIndex(index);

      if (newTiles.every((v, i) => v === i)) {
        if (onSolve) onSolve();
      }
    }
  };

  const getAdjacentIndexes = (index, grid) => {
    const moves = [];
    const row = Math.floor(index / grid);
    const col = index % grid;
    if (row > 0) moves.push(index - grid);
    if (row < grid - 1) moves.push(index + grid);
    if (col > 0) moves.push(index - 1);
    if (col < grid - 1) moves.push(index + 1);
    return moves;
  };
=======
// src/components/PuzzleImage.jsx
import React, { useState, useEffect } from "react";
import "../styles/enigmes.css";

/**
 * PuzzleImage — Puzzle 4x4 simple à clic pour échanger deux tuiles
 * Props :
 *  - imageSrc : chemin de l’image complète
 *  - taille : nombre de tuiles par ligne (4 pour 4x4)
 *  - onResolve : callback quand le puzzle est complété
 */
export default function PuzzleImage({ imageSrc, taille = 4, onResolve }) {
  const total = taille * taille;
  const initialTiles = Array.from({ length: total }, (_, i) => i);
  const [tiles, setTiles] = useState(shuffle(initialTiles));
  const [selected, setSelected] = useState(null);

  // Mélange des tuiles
  function shuffle(array) {
    return array
      .map((a) => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1]);
  }

  // Gestion du clic
  const handleTileClick = (index) => {
    if (selected === null) {
      setSelected(index);
    } else {
      const newTiles = [...tiles];
      [newTiles[selected], newTiles[index]] = [
        newTiles[index],
        newTiles[selected],
      ];
      setTiles(newTiles);
      setSelected(null);
    }
  };

  // Vérification si puzzle résolu
  useEffect(() => {
    const solved = tiles.every((val, i) => val === i);
    if (solved) onResolve();
  }, [tiles]);
>>>>>>> 5dee8d7 (Maj--> finalisation puzzle + config enigme 2 et 3)

  return (
    <div
      className="puzzle-container"
      style={{
<<<<<<< HEAD
        gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
        gridTemplateRows: `repeat(${gridSize}, 1fr)`,
      }}
    >
      {tiles.map((tileIndex, i) => {
        const isEmpty = tileIndex === gridSize * gridSize - 1;
        const row = Math.floor(tileIndex / gridSize);
        const col = tileIndex % gridSize;

        return (
          <div
            key={i}
            className={`tile ${isEmpty ? "empty" : ""}`}
            onClick={() => handleTileClick(i)}
            style={{
              backgroundImage: isEmpty ? "none" : `url(${src})`,
              backgroundSize: `${gridSize * 100}% ${gridSize * 100}%`,
              backgroundPosition: `${(col * 100) / (gridSize - 1)}% ${
                (row * 100) / (gridSize - 1)
              }%`,
              backgroundRepeat: "no-repeat",
              backgroundColor: isEmpty ? "#0d1b2a" : "#0d1b2a",
            }}
          ></div>
        );
      })}
=======
        gridTemplateColumns: `repeat(${taille}, 1fr)`,
        width: "400px",
        height: "400px",
      }}
    >
      {tiles.map((tile, i) => (
        <div
          key={i}
          className={`tile ${selected === i ? "selected" : ""}`}
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: `${taille * 100}% ${taille * 100}%`,
            backgroundPosition: `${(tile % taille) * (100 / (taille - 1))}% ${
              Math.floor(tile / taille) * (100 / (taille - 1))
            }%`,
          }}
          onClick={() => handleTileClick(i)}
        ></div>
      ))}
>>>>>>> 5dee8d7 (Maj--> finalisation puzzle + config enigme 2 et 3)
    </div>
  );
}
