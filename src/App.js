import React from 'react';
import Game from './game';
import Modal from './modal';

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
