"use client";
import React, { useState, useEffect } from 'react';
import '@/app/PacmanBackground.css'; // Import the CSS for this component

// Function to generate random positions for ghosts
const generateRandomPosition = () => ({
  top: `${Math.random() * 90}%`, // Random position, from 0% to 90% of the screen height
  left: `${Math.random() * 90}%`, // Random position, from 0% to 90% of the screen width
});

const PacmanBackground: React.FC = () => {
  const [ghosts, setGhosts] = useState<number[]>([]);

  useEffect(() => {
    // Generate a number of random ghosts (e.g., 10 ghosts)
    const numGhosts = 10;
    const ghostArray = Array.from({ length: numGhosts }, (_, index) => index);
    setGhosts(ghostArray);
  }, []);

  return (
    <div className="pacman-container">
      {/* Pacman Figure */}
      <div className="pacman"></div>

      {/* Dynamic Ghosts */}
      {ghosts.map((ghostIndex) => {
        const ghostClass = `ghost ghost${(ghostIndex % 4) + 1}`;
        const position = generateRandomPosition(); // Generate random position for each ghost

        return (
          <div
            key={ghostIndex}
            className={ghostClass}
            style={{
              top: position.top,
              left: position.left,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default PacmanBackground;
