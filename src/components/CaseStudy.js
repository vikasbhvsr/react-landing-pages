import React, { Component } from 'react';
import './CaseStudy.css';

class CaseStudy extends Component {
  render() {
    return (
      <section className='caseStudySection'>
        <h1 className='headingOne'>Case Study</h1>
        <div className='caseStudies'>
          <div className='caseStudy'>
            <div className='caseStudyImage  caseOne' />
            <div className='caseStudyLink'>
              <a
                className='caseStudyLink'
                href='https://thesulfurgroup.com/portfolio/too-faced-cosmetics/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Too Faced
              </a>
            </div>
          </div>
          <div className='caseStudy'>
            <div className='caseStudyImage  caseTwo' />
            <div className='caseStudyLink'>
              <a
                className='caseStudyLink'
                href='https://thesulfurgroup.com/portfolio/neutrogena-influencer-campaign/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Neutrogena
              </a>
            </div>
          </div>{' '}
          <div className='caseStudy'>
            <div className='caseStudyImage  caseThree' />
            <div className='caseStudyLink'>
              <a
                className='caseStudyLink'
                href='https://thesulfurgroup.com/portfolio/bh-cosmetics/'
                target='_blank'
                rel='noopener noreferrer'
              >
                BH Cosmetics
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default CaseStudy;
