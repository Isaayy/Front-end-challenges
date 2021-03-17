import React, { Component } from 'react';
import './App.scss';

import Input from './Components/Input/Input'
import Button from './Components/Button/Button'

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
    .then(response => response.json())
    .then(data => console.log(data[0].name))
    .catch(err => alert(err))
  }


  render() {
    return (
      <div className="App">
        <h4>Fetch data about countries</h4>
        <div className="cta">
          <Input blur={this.addCountry}>Poland</Input>
          <Button click={this.getCountry.bind(this,this.state.value)}>Get data</Button>
        </div>
      </div>
    );

  }
}

export default App;
