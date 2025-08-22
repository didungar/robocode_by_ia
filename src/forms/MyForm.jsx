javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemList = () => {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getScores();
  }, []);

  const getScores = async () => {
    try {
      const response = await axios.get('https://api.hubspot.com/crm-pipelines');
      setScores(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://api.hubspot.com/crm-pipelines', {
        name: 'My Score',
        description: 'This is my score'
      });
      setScores([...scores, response.data]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Scores</h1>
      <ul>
        {scores.map((score, index) => (
          <li key={index}>{score.name}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" />
        <label>Description:</label>
        <textarea name="description"></textarea>
        <button type="submit">Add Score</button>
      </form>
    </div>
  );
};

export default ItemList;