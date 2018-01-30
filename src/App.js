import React from 'react';
import Game from './game';
import Modal from './modal';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: {
        title: "What do I do?",
        // content: "{[<p>This is a Hot or Cold Number Guessing Game. The game goes like this:</p><ol><li>I pick a random secret number between 1 to 100 and keep it hidden.</li><li>You need to guess until you can find the hidden secret number.</li><li>You will get feedback on how close (\"hot\") or far (\"cold\") your guess is.</li></ol><p>So, Are you ready?</p>",
        buttonText: "Got It!"
      }
    }
  }

  render() {
    const whatModal = this.state.modal;

    return (
      <main className="app">
        <Game />
        <Modal 
          title={whatModal.title} 
          buttonText={whatModal.buttonText}
        />
      </main>
    );
  }
}
