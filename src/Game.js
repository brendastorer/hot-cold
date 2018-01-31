import React from 'react';
import './game.css';
import Header from './header';
import GameForm from './game-form';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: "Make Your Guess!",
      guesses: [],
      randomNumber: Math.floor(Math.random() * 100) + 1
    }
  }

  restartGame() {
    this.setState({
      feedback: "Make Your Guess!",
      guesses: [],
      correctAnswer: Math.floor(Math.random() * 100) + 1
    });
  }

  makeGuess(guess) {
    let newArray = this.state.guesses;  
    newArray.push(guess);

    const correctAnswer = this.state.randomNumber;
    const difference = Math.abs(guess - correctAnswer);
    let feedback = this.state.feedback;
    console.log(guess);
    console.log(correctAnswer);
    console.log(difference);

    if (difference >= 40) {
      feedback = "So cold...";
    }
    else if (difference >= 20) {
      feedback = "Warm...";
    }
    else if (difference >= 10){
      feedback = "Hot!";
    }
    else if (difference >= 1) {
      feedback = "HOT HOT HOT!!!!";
    }
    else {
      feedback = "BOOM! Correct!";
    }

    this.setState({
      feedback: feedback,
      guesses: newArray
    });
  }

  render() {
    const guessesList = this.state.guesses.map((guess, index) =>
      <li key={index}>
        {guess}
      </li>
    );

    const guessesFeedback = this.state.feedback;
    const numberOfGuesses = this.state.guesses.length;

    return (
      <div>
        <Header onRestartGame={() => this.restartGame()} />
        <section className="game">
          <h2 className="game__instructions">{guessesFeedback}</h2>
          <GameForm onGuess={number => this.makeGuess(number)} />
          <p className="game__status">
            Guess #<span className="game__status-count">{numberOfGuesses}</span>!
          </p>
          <ul className="game__guesses">
            {guessesList}
          </ul>
        </section>
      </div>
    );
  }
}
