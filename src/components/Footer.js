import React from 'react';
import '../style/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
        </div>
      </section>
      
    
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link
            className='social-icon-link linkedin'
            to='/'
            target='_blank'
            aria-label='LinkedIn'
          >
            <i className='fab fa-linkedin' />
            </Link>
          </div>
          <small className='website-rights'>TRVL © 2020</small>
          <div className='social-icons'>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;