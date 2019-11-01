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
      <div className="right menu login" >
      
      <div className="button-container">
        <Link to="/" className="ui inverted primary grey button" >
          All Streams
        </Link>
      </div>
      <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;