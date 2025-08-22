import React, { useState, useEffect } from 'react';
import Score from './Score';
import styles from './styles.css';

function App() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/scores')
      .then(response => response.json())
      .then(data => setScores(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Score Page</h1>
        {scores.map((score, index) => (
          <Score key={index} score={score} />
        ))}
      </header>
    </div>
  );
}

function Score({ score }) {
  return (
    <div className="Score">
      <h2>{score.name}</h2>
      <p>{score.value}</p>
    </div>
  );
}

export default App;