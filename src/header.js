import React from 'react';
import Nav from './Nav';
import './Header.css';

export default function Header(props) {
  return(
    <header>
      <Nav onRestartGame={() => props.onRestartGame()} />
      <h1 className="header__title">HOT or COLD</h1>
    </header>
  );
}