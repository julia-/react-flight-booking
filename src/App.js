import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Emoji from './components/Emoji'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is a heading</h1>
        <Emoji />
        <Emoji cat />
        <Emoji emotion='sad' />
        <Emoji emotion='love' />
        <Emoji emotion='fear' />
        <Emoji cat emotion='sad' />
        <Emoji cat emotion='love' />
        <Emoji cat emotion='fear' />

        <br />

        <Button primary>
          Find Flights
        </Button>
        <Button>
          <Emoji cat emotion='love'/>
          {' '}
          Sign up
        </Button>
        <Button children='Sign in' magic href='/competition' />

        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
      </div>
    );
  }
}

export default App;
