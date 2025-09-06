// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
   
    

      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Terms of Service</Link>
          </div>

          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>

        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>

      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              TRVL <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>TRVL © {new Date().getFullYear()}</small>

          <div className='social-icons'>
            <a
              className='social-icon-link facebook'
              href='https://www.facebook.com/amna.tariq.2002/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </a>

            <a
              className='social-icon-link instagram'
              href='https://www.instagram.com/amna_tariq_11/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </a>

            <a
              className='social-icon-link youtube'
              href='https://www.youtube.com/@amnatariq7065'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </a>

            <a
              className='social-icon-link twitter'
              href='https://x.com/AmnaTar17980963'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </a>

            <a
              className='social-icon-link linkedin'
              href='https://www.linkedin.com/in/amna-tariq-557341310/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
