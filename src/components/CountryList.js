import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';


const CountryList = ({ countries }) => {
  return (
    <div className="country-list">
      {countries.map((country) => (
        <Card key={country.cca3} style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant="top" src={country.flags.png} alt={`Flag of ${country.name.common}`} />
          <Card.Body>
            <Card.Title>{country.name.common}</Card.Title>
            <Card.Text>Столица: {country.capital ? country.capital[0] : 'Неизвестно'}</Card.Text>
            <Link to={`/country/${country.cca3}`}>
              <Button variant="primary">Подробнее</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CountryList;
