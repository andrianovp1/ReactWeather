var React = require('react');

var WeatherMessage = ({location, temp}) => {
  return (
    <h3>{temp} now in {location}</h3>
  );
};

module.exports = WeatherMessage;
