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
      
    
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link
            class='social-icon-link linkedin'
            to='/'
            target='_blank'
            aria-label='LinkedIn'
          >
            <i class='fab fa-linkedin' />
            </Link>
          </div>
          <small class='website-rights'>TRVL © 2020</small>
          <div class='social-icons'>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;