import React from 'react';

const ZodiacCard = ({ zodiac, onClick }) => {
  return (
    <div className="zodiac-card" onClick={onClick}>
      <div className="zodiac-icon">{zodiac.icon}</div>
      <div className="zodiac-info">
        <h3>{zodiac.name}</h3>
        <p>{zodiac.period}</p>
      </div>
    </div>
  );
};

export default ZodiacCard;
