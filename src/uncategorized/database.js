// database.js
import { useState } from 'react';

const Scores = () => {
  const [scores, setScores] = useState([]);
  const [currentGame, setCurrentGame] = useState({});
  const [winner, setWinner] = useState(null);

  // fonction pour ajouter un score à la liste des scores
  const addScore = (score) => {
    setScores([...scores, score]);
  };

  // fonction pour ajouter un jeu à la liste des jeux
  const addGame = (game) => {
    setCurrentGame(game);
  };

  // fonction pour déterminer le vainqueur du jeu actuel
  const determineWinner = () => {
    if (currentGame.winner === null) {
      return 'No winner yet!';
    } else {
      return `${currentGame.winner} wins!`;
    }
  };

  // fonction pour supprimer un score et un jeu de la liste
  const deleteScore = (score) => {
    setScores(scores.filter((s) => s !== score));
  };

  return {
    scores,
    addScore,
    currentGame,
    addGame,
    determineWinner,
    deleteScore,
  };
};

export default Scores;