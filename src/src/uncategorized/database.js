// src/uncategorized/database.js
import { useState, useEffect } from 'react';

function getUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://example.com/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return users;
}

function getUser(id) {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://example.com/api/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [id]);

  return user;
}