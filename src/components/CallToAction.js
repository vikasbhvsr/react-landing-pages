import React, { Component } from 'react';
import './CallToAction.css';

class CallToAction extends Component {
  render() {
    return <button className='cta'>{this.props.ctaName}</button>;
  }
}

export default CallToAction;
