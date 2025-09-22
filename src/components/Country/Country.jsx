import React from 'react';
import './Country.css';
import { useState } from 'react';

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
  console.log(handleVisitedCountries);
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    // console.log('Clicked');
    // visited ? setVisited(false) : setVisited(true);
    // setVisited(visited ? false : true);
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  return (
    <div className={`country ${visited && 'countryVisited'}`}>
      <img
        className="flag"
        src={country.flags.flags.png}
        alt={country.flags.flags.alt}
      />
      <h3>Name: {country.name.common} </h3>
      <p>Population: {country.population.population}</p>
      <p>Region: {country.region.region}</p>
      <p>Continents: {country.continents.continents}</p>
      <p>
        Area: {country.area.area}{' '}
        {country.area.area > 300000 ? '(Big Country)' : '(Small Country)'}
      </p>
      {country.currencies && (
        <div>
          {Object.entries(country.currencies.currencies).map(([code, data]) => (
            <p key={code}>
              Currency: {data.name} ({data.symbol})
            </p>
          ))}
        </div>
      )}
      <button
        onClick={handleVisited}
        style={{
          backgroundColor: visited ? '#39FF14' : '',
          color: visited ? 'black' : 'white',
        }}
      >
        {visited ? 'VISITED' : 'NOT VISITED'}
      </button>
      <button
        onClick={() => {
          handleVisitedFlags(country.flags.flags.png);
        }}
      >
        Add Visited Flags
      </button>
    </div>
  );
};

export default Country;
