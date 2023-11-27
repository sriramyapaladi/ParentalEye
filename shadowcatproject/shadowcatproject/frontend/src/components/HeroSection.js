import React from 'react';
import '../App.css';
//import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/homebg.mp4' autoPlay loop muted />
      <h1>ParentalEye</h1>
      <div className='hero-btns'>
       {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
        DOWNLOAD
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
  </Button>*/}
      </div>
    </div>
  );
}

export default HeroSection;