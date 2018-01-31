import React from 'react';
import './nav.css';

export default function Nav(props) {
  return (
    <nav className="app-nav">
      <ul>
        <li>
          <a href="#what" onClick={event => event.preventDefault}>What?</a>
        </li>
        <li>
          <a href="#restart" onClick={() => props.onRestartGame()}>+ New Game</a>
        </li>
      </ul>
    </nav>
  );
}