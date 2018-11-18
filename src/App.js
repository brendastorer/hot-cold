import React from 'react';
import Game from './Game';
import Modal from './Modal';

export default class App extends React.Component {
  render() {
    return (
      <main className="app">
        <Game />
        <Modal />
      </main>
    );
  }
}
