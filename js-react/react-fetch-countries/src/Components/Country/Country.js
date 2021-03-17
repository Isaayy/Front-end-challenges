import React from 'react';
import './Country.scss'


const Country = props => {

    const {flag,name,capital,region,currencies,population} = props.country;

  return (
    <div className="country">
        <img className="country__img" src={flag} alt="flag"></img>
        <ul className="country__content">
            <li className="country__item country__item--bold">📍 {name}</li>
            <li className="country__item">🏛️ {capital}</li>
            <li className="country__item">🗺️ {region}</li>
            <li className="country__item">💸 {currencies[0].code}</li>
            <li className="country__item">👫 {(population/1000000).toFixed(1)}m</li>
        </ul>
    </div>
  );
};

export default Country;