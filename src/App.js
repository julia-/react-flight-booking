import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is a heading</h1>
        <Button title='Find Flights' primary />
        <Button title='Sign up' />
        <Button title='Sign in' magic />
        <ul>
          <li>Why</li>
        </ul>
      </div>
    );
  }
}

export default App;
