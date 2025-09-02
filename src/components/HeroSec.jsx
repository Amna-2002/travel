import React from 'react';
import '../App.css';
import './HeroSec.css';

function HeroSec() {
  return (
    <div className='hero-container'>
      <video src="/videos/video-2.mp4" autoPlay loop muted playsInline />

      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>

      <div className='hero-btns'>
        <button className='btns btn--outline btn--large'>
          GET STARTED
        </button>

        <button className='btns btn--primary btn--large'>
          WATCH TRAILER <i className='far fa-play-circle'></i>
        </button>
      </div>
    </div>
  )
}

export default HeroSec;
