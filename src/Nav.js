import React from 'react';
import './Nav.css';

export default function Nav(props) {
  return (
    <nav className="app-nav">
      <ul>
        <li>
          <a href="#">What?</a>
        </li>
        <li>
          <a href="#">+ New Game</a>
        </li>
      </ul>
    </nav>
  )
}