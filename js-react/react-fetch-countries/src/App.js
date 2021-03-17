import React, { Component } from 'react';
import './App.scss';

import Input from './Components/Input/Input'
import Button from './Components/Button/Button'
import Country from './Components/Country/Country'

class App extends Component {

  state = {
    countries: [],
    value: ''
  }

  addCountry = (e) => {
    if(!e.target.value) return;
    this.setState({ value: e.target.value });
  }

  getCountry = (country) => {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => {
      if (!response.ok) throw new Error('Country not found');
      return response.json()})
    .then(data => {
      const countries = [...this.state.countries]
      countries.push(data[0]);
      this.setState({countries:countries})
    })
    .catch(err => alert(err))
  }


  render() {

    let countries = null;

    if (this.state.countries) {
      countries = (
        <div className="container">
          {this.state.countries.map((country , index)=> {
            return <Country key={index} country={country} />;
          })}
        </div>
      );
    }


    return (
      <div className="App">
        <h4>Fetch data about countries</h4>
        <div className="cta">
          <Input blur={this.addCountry}>Poland</Input>
          <Button click={this.getCountry.bind(this,this.state.value)}>Get data</Button>
        </div>
        {countries}
      </div>
    );

  }
}

export default App;
