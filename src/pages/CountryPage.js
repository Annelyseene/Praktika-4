import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, ListGroup } from 'react-bootstrap';
import '../App.css';


const CountryPage = () => {
  const { alpha3Code } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      const response = await fetch(`https://restcountries.com/v3.1/alpha/${alpha3Code}`);
      const data = await response.json();
      setCountry(data[0]);
    };

    fetchCountryDetails();
  }, [alpha3Code]);

  if (!country) return <p>Загрузка...</p>;

  return (
    <div>
      <h1>{country.name.common}</h1>
      <Card>
        <Card.Img variant="top" src={country.flags.png} />
        <Card.Body>
          <Card.Title>Информация</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item><strong>Столица:</strong> {country.capital ? country.capital[0] : 'Неизвестно'}</ListGroup.Item>
            <ListGroup.Item><strong>Население:</strong> {country.population}</ListGroup.Item>
            <ListGroup.Item><strong>Площадь:</strong> {country.area} км²</ListGroup.Item>
            <ListGroup.Item><strong>Языки:</strong> {Object.values(country.languages || {}).join(', ')}</ListGroup.Item>
            <ListGroup.Item><strong>Валюты:</strong> {Object.values(country.currencies || {}).map((cur) => cur.name).join(', ')}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CountryPage;
