import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HubSpotApi = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get('https://api.hubspot.com/contacts/v1/lists/all?access_token=YOUR_ACCESS_TOKEN')
      .then(response => {
        setPlayers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Joueurs</h1>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
};