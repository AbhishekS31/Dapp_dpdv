"use client"
// PacmanBackground.tsx
import React from 'react';
import '@/app/PacmanBackground.css'; // Import the CSS for this component

const PacmanBackground: React.FC = () => {
    return (
        <div className="pacman-container">
            <div className="pacman"></div>
            <div className="ghost ghost1"></div>
            <div className="ghost ghost2"></div>
            <div className="ghost ghost3"></div>
            <div className="ghost ghost4"></div>
        </div>
    );

};

export default PacmanBackground;

