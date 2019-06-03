import React from 'react';
import './Card.css';

const Card = ({number, president, birth_year, death_year, took_office, left_office, party}) => {
  return (
    <div className="Card">
      <p>Number: {number}</p>
      <p>President: {president}</p>
      <p>Birth Year: {birth_year}</p>
      <p>Death Year: {death_year}</p>
      <p>Took Office: {took_office}</p>
      <p>Left Office: {left_office}</p>
      <p>Party: {party}</p>
    </div>
  ); 
}

export default Card;