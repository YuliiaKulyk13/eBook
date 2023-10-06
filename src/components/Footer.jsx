import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="footer">
      <div className="social-icons">
        <a
          className="icon-link"
          href="https://www.linkedin.com/company/engajmedia/mycompany/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          {' '}
          <FontAwesomeIcon className="icon" icon={faLinkedin} size="2x" />
        </a>
        <a
          className="icon-link"
          href="https://twitter.com/i/flow/login?redirect_after_login=%2FEngajmedia"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          {' '}
          <FontAwesomeIcon className="icon" icon={faTwitter} size="2x" />
        </a>
        <a
          className="icon-link"
          href="https://www.instagram.com/engajmedia_backup/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          {' '}
          <FontAwesomeIcon className="icon" icon={faInstagram} size="2x" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
