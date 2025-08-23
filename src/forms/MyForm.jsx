import React, { useState } from 'react';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.example.com/scores?q=${query}`)
      .then((response) => response.json())
      .then((data) => {
        setResults(data);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input type="text" id="search" value={query} onChange={(event) => setQuery(event.target.value)} />
        <button type="submit">Search</button>
      </form>
      {results.map((result) => (
        <div key={result.id}>
          <h2>{result.name}</h2>
          <p>{result.description}</p>
        </div>
      ))}
    </div>
  );
}