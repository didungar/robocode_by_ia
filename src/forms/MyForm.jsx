import React, { useState } from 'react';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const queryValue = e.target.value;
    setQuery(queryValue);
    if (queryValue !== '') {
      fetch(`https://api.example.com/scores?q=${encodeURIComponent(queryValue)}`)
        .then((response) => response.json())
        .then((data) => {
          setResults(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      setResults([]);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher un score..."
        />
        <button type="submit">Rechercher</button>
      </form>
      {results.length > 0 && (
        <ul>
          {results.map((result) => (
            <li key={result.id}>{result.score}</li>
          ))}
        </ul>
      )}
    </div>
  );
}