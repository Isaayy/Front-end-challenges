import React from 'react';
import logo from '../../images/logo.svg';

import Description from '../Description/Description';
import Button from '../Button/Button';

import './Header.css';
import '../../GlobalStyle.css';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <h1 className="heading-primary">A history of everything you copy</h1>
      <Description margin="true">Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.</Description>
      <div className="buttons">
        <Button color="cyan">Download for iOS</Button>
        <Button color="blue">Download for Mac</Button>
      </div>
    </header>
  );
};

export default Header;
