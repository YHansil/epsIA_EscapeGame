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

  return (
    <div
      className="puzzle-container"
      style={{
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
    </div>
  );
}
