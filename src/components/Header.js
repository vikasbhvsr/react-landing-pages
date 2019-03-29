import React, { Component } from 'react';
import './Header.css';
import './CallToAction';
import logo from '../img/logo.png';
import CallToAction from './CallToAction';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <div className='navLeft'>
            <a href='https://thesulfurgroup.com'>
              <img className='logo' src={logo} alt='The Sulfur Group' />
            </a>
          </div>
          <div className='navRight'>
            <CallToAction ctaName='Contact Us' />
          </div>
        </nav>
      </header>
    );
  }
}
export default Header;
