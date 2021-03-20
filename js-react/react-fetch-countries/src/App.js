import React, { useState } from 'react';
import './App.scss';

import Input from './Components/Input/Input'
import Button from './Components/Button/Button'
import Country from './Components/Country/Country'

const App = () => {
  const [state,updateState] = useState({
    countries: [],
    value: ''
  })

  const addCountry = (e) => {
    if(!e.target.value) return;
    updateState({countries:state.countries , value:e.target.value})
  }

  const getCountry = (country) => {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => {
      if (!response.ok) throw new Error('Country not found');
      return response.json()})
    .then(data => {
      const countriesCopy = [...state.countries]
      countriesCopy.push(data[0]);
      updateState({countries:countriesCopy })
    })
    .catch(err => alert(err))
  }

    let countries = null;

    if (state.countries) {
      countries = (
        <div className="container">
          {state.countries.map((country , index)=> {
            return <Country key={index} country={country} />;
          })}
        </div>
      );
    }


  return (
    <div className="App">
      <h4>Fetch data about countries</h4>
      <div className="cta">
        <Input blur={addCountry}>Poland</Input>
        <Button click={getCountry.bind(this,state.value)}>Get data</Button>
      </div>
      {countries}
    </div>
  );

  
}

export default App;
