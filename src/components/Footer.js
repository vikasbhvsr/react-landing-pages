import React, { Component } from 'react';
import './Footer.css';
import CTA from './CallToAction';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
          <div className='contactUs'>
            <h3>Contact Us</h3>
            <p>
              <a href='mailto:Hello@TheSulfurGroup.com'>
                Hello@TheSulfurGroup.com
              </a>
            </p>
            <p>
              <a href='tel:+12135452744'>Phone: (213) 545-2744</a>
            </p>
          </div>
          <CTA ctaName='Get Lit' />
        </div>
        <p>
          © Copyright 2019 -{' '}
          <span className='magicalLine'>The Sulfur Group.</span> All Rights
          Reserved.
        </p>
      </footer>
    );
  }
}
export default Footer;
