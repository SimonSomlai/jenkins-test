import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simon is geweldig! Eline ook wel, maar een beetje minder :)</h1>
        </header>
      </div>
    );
  }
}

export default App;
