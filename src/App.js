import React from 'react';
import './App.css';
import Nav from './Nav';
import Game from './Game';

export default class App extends React.Component {
  render() {
    return (
      <main className="app">
        <Nav />
        <header className="app__header">
          <h1 className="app__title">HOT or COLD</h1>
        </header>
        <Game />
      </main>
    );
  }
}
