import React, { Component } from 'react';
import './App.css';
import Headline from './components/Headline.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Headline town={"Worcester"} />
      </div>
    );
  }
}

export default App
