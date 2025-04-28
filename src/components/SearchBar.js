import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../App.css';


const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);  
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="search">
        <Form.Control
          type="text"
          placeholder="Введите название страны..."
          value={query}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Поиск
      </Button>
    </Form>
  );
};

export default SearchBar;
