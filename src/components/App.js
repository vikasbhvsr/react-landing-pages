import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import Cards from './Cards';
import CaseStudy from './CaseStudy';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Hero />
        <Cards />
        <CaseStudy />
      </div>
    );
  }
}

export default App;
