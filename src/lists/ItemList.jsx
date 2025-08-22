javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Score = () => {
  const [scores, setScores] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fonction pour récupérer les scores et le jeu en cours
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/scores');
      setScores(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  // Utilisez useEffect pour récupérer les scores et le jeu en cours lors du mounting du composant
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Chargement...</div>
      ) : (
        <ul>
          {scores.map((score) => (
            <li key={score.id}>{score.name} - {score.value}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Score;