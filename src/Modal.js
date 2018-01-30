import React from 'react';
import './modal.css';

export default function Modal(props) {
  return (
    <section id="#what" className="modal">
      <div className="modal__content">
        <h3 className="modal__title">{props.title}</h3>
        <p>This is a Hot or Cold Number Guessing Game. The game goes like this:</p>
        <ol>
          <li>I pick a random secret number between 1 to 100 and keep it hidden.</li>
          <li>You need to guess until you can find the hidden secret number.</li>
          <li>You will get feedback on how close ("hot") or far ("cold") your guess is.</li>
        </ol>
        <p>So, Are you ready?</p>
        <a href="#" className="button">{props.buttonText}</a>
      </div>
    </section>
  )
}

Modal.defaultProps = {
    title: ''
};