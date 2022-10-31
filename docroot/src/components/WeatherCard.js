import React from "react";
import { Card } from "react-bootstrap";
const WeatherCard = ({ dt, temp_min, temp_max, main, icon }) => {
  // Create a date object with Date class constructor.
  const date = new Date(dt);
  return (
    <div className={Card}>
      <Card.Img
        variant="top"
        // Get the src from example url and pass the icon prop for icon code.
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <Card.Body>
        <Card.Title>{main}</Card.Title>
        <p>
          <span style={{ fontSize: "1rem", fontWeight: "500" }}>
            {date.toLocaleTimeString()}
          </span>
          <br />
          {date.toLocaleDateString()}
        </p>
        <p>Min: {temp_min}</p>
        <p>Max: {temp_max}</p>
      </Card.Body>
    </div>
  );
};

export default WeatherCard;
