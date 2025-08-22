// src/components/Button.js
import React from 'react';

function Button() {
  return (
    <button type="button">Click me!</button>
  );
}

export default Button;

// src/forms/Form.js
import React, { useState } from 'react';
import Button from './Button';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        Message:
        <textarea value={message} onChange={(event) => setMessage(event.target.value)} />
      </label>
      <br />
      <button type="submit">Send</button>
    </form>
  );
}

export default Form;

// src/lists/List.js
import React from 'react';
import Button from './Button';
import Form from './Form';

function List() {
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    const newItem = { name: '', email: '', message: '' };
    setItems([...items, newItem]);
  };

  return (
    <div>
      <h1>List of Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Button label="Edit" onClick={() => console.log(`Editing item ${item.name}`)} />
            <Button label="Delete" onClick={() => console.log(`Deleting item ${item.name}`)} />
            <Form initialValues={{ name: item.name, email: item.email, message: item.message }} />
          </li>
        ))}
      </ul>
      <Button label="Add Item" onClick={handleAddItem} />
    </div>
  );
}

export default List;