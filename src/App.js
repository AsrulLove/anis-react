import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header textIn="Halo ini props"></Header>
      </div>
    );
  }
}

export default App;
