"use client"
// PacmanBackground.tsx
import React, { useEffect } from 'react';
import '@/app/PacmanBackground.css'; 

const PacmanBackground: React.FC = () => {
    const moveGhosts = () => {
        const ghosts = document.querySelectorAll('.ghost');
        ghosts.forEach(ghost => {
            const randomX = Math.random() * 100; // Random X position 
            const randomY = Math.random() * 90; // Random Y position 
            const duration = Math.random() * 5 + 3; // Random duration between 3s and 8s
            ghost.setAttribute('style', `transform: translate(${randomX}vw, ${randomY}vh); transition: transform ${duration}s ease-in-out;`);
        });
    };

    useEffect(() => {
        const interval = setInterval(moveGhosts, 2000); // Move ghosts every 2 seconds
        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="pacman-container">
            <div className="pacman"></div>
            <div className="ghost ghost1"></div>
            <div className="ghost ghost2"></div>
            <div className="ghost ghost3"></div>
            <div className="ghost ghost4"></div>
            <div className="ghost ghost5"></div>
            <div className="ghost ghost6"></div>
            <div className="ghost ghost7"></div>
            <div className="ghost ghost8"></div>
        </div>
    );
};
export default PacmanBackground;

