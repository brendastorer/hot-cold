import React from 'react';

export default class GameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const number = this.state.value;

    if (number && this.props.onGuess) {
      this.props.onGuess(number);
    }

    this.setState({
      value: ''
    });
  }

  render() {
    return (
      <form className="game__form" onSubmit={this.handleSubmit}>
        <input 
          className="game__input" 
          type="number" 
          min="0" max="100" 
          placeholder="Enter your Guess"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button className="button game__button">Guess</button>
      </form>
    )
  }
}