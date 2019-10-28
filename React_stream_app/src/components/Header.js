import React from 'react';
import { Link } from 'react-router-dom';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import logo from '../../src/images/logo.png';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item" >
        <img className="img-responsive" src={logo} alt="logo" style={{width: 70, height:70}} />
        
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;