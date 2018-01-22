import React from 'react';
import './App.css';
import Nav from './Nav';
import Game from './Game';
import Modal from './Modal';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: {
        title: "What do I do?",
        buttonText: "Got It!"
      }
    }
  }

  render() {
    const whatModal = this.state.modal;

    return (
      <main className="app">
        <Nav />
        <header className="app__header">
          <h1 className="app__title">HOT or COLD</h1>
        </header>
        <Game />
        <Modal 
          title={whatModal.title} 
          buttonText={whatModal.buttonText}
        />
      </main>
    );
  }
}
