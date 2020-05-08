import React from 'react';
import UIkit from 'uikit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import '../styles/contact.scss';

export default () => {
  return (
    <div className="uk-container uk-container-center">
      <div className="contact-container">
        <h1 className="portfolio-header">Let's Talk!</h1>
        <div>
          <p className="portfolio-text contact-text">mfbrowne18@gmail.com</p>
          <p className="portfolio-text contact-text">+61 432-691-639</p>
        </div>
        <div>
          <a className="contact-icon-a" href="https://www.linkedin.com/in/mitchell-browne/" target="_blank">
            <FontAwesomeIcon className="contact-icon" icon={faLinkedin} />
          </a>
          <a className="contact-icon-a" href="https://github.com/mitchbrowne" target="_blank">
            <FontAwesomeIcon className="contact-icon" icon={faGithubSquare} />
          </a>
        </div>
      </div>
    </div>
  )
}
