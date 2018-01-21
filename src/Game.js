import React from 'react';
import './Game.css';

export default class Game extends React.Component {
  render() {
    return (
      <section className="game">
        <h2 className="game__instructions">Make your Guess!</h2>
        <form className="game__form">
          <input className="game__input" placeholder="Enter your Guess" />
          <button className="button game__button">Guess</button>
        </form>
        <p className="game__status">
          Guess #<span className="game__status-count">0</span>!
        </p>
        <ul className="game__guesses">
          <li>50</li>
          <li>75</li>
          <li>25</li>
          <li>30</li>
          <li>15</li>
        </ul>
      </section>
    );
  }
}
