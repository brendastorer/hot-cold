import React from 'react';
import './Modal.css';

export default class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  render() {
    return (
      <section id="#what" className="modal">
        <div className="modal__content">
          <h3 className="modal__title">What do I do?</h3>
          <p>This is a Hot or Cold Number Guessing Game. The game goes like this:</p>
          <ol>
            <li>I pick a random secret number between 1 to 100 and keep it hidden.</li>
            <li>You need to guess until you can find the hidden secret number.</li>
            <li>You will get feedback on how close ("hot") or far ("cold") your guess is.</li>
          </ol>
          <p>So, Are you ready?</p>
          <a href="#" className="button">Got It!</a>
        </div>
      </section>
    )
  }
}