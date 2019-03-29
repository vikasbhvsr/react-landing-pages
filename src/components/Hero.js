import React, { Component } from 'react';
import './Hero.css';
import CallToAction from './CallToAction';

class Hero extends Component {
  render() {
    return (
      <section className='heroSection'>
        <div className='hero-content'>
          <h1 className='hero-content__title'>Break-Free From The. Norm.</h1>
          <p className='hero-content__text'>
            We're here to forge meaningful companies and oridinary people to
            propel your brand from everyday essentials to vital
            swear-by-products.
          </p>
          <CallToAction ctaName='Ignite Your Marketing' />
        </div>
      </section>
    );
  }
}

export default Hero;
