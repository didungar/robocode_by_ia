import React, { useState } from 'react';
import { database } from './uncategorized/database';

function Game() {
  const [deck, setDeck] = useState([]); // Initialise le deck de cartes avec un tableau vide
  const [playerHand, setPlayerHand] = useState([]); // Initialise la main du joueur avec un tableau vide
  const [opponentHand, setOpponentHand] = useState([]); // Initialise la main de l'adversaire avec un tableau vide
  const [turn, setTurn] = useState('player'); // Initialise le tour avec le nom du joueur
  const [score, setScore] = useState({ player: 0, opponent: 0 }); // Initialise les scores avec zéro pour chaque joueurs

  // Fonction permettant de placer une carte dans la main du joueur
  function drawCard() {
    if (deck.length > 0) {
      const card = deck[0];
      setPlayerHand([...playerHand, card]);
      setDeck(deck.slice(1));
    }
  }

  // Fonction permettant de placer une carte dans la main de l'adversaire
  function drawOpponentCard() {
    if (opponentHand.length === 0) {
      const card = deck[0];
      setOpponentHand([...opponentHand, card]);
      setDeck(deck.slice(1));
    }
  }

  // Fonction permettant de gagner un tour
  function winRound() {
    if (turn === 'player') {
      const newScore = { player: score.player + 1, opponent: score.opponent };
      setScore(newScore);
      setTurn('opponent');
    } else {
      const newScore = { player: score.player, opponent: score.opponent + 1 };
      setScore(newScore);
      setTurn('player');
    }
  }

  // Fonction permettant de gagner la partie
  function winGame() {
    if (score.player > score.opponent) {
      console.log('Joueur a gagné !');
    } else if (score.player < score.opponent) {
      console.log('Adversaire a gagné !');
    } else {
      console.log('Match nul !');
    }
  }

  // Fonction permettant de remettre la partie en l'état initial après chaque tour
  function resetRound() {
    setPlayerHand([]);
    setOpponentHand([]);
    setTurn('player');
  }

  return (
    <div>
      <h1>Jeu de cartes</h1>
      <button onClick={drawCard}>Joueur : {score.player}</button>
      <button onClick={drawOpponentCard}>Adversaire : {score.opponent}</button>
      <button onClick={winRound}>Gagner le tour</button>
      <button onClick={resetRound}>Remettre le partie en l'état initial</button>
    </div>
  );
}

export default Game;