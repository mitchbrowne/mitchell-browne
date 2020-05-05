import React from 'react';
import UIkit from 'uikit';
import '../styles/about.scss';

import Awards from '../components/About/Awards';
import AboutMe from '../components/About/AboutMe';
import Interests from '../components/About/Interests';

export default () => {
  return (
    <div className="uk-container uk-container-center">
      <div className="uk-block-default">
        <div className="tm-middle uk-grid" data-uk-grid-match data-uk-grid-margin>
          <div className="uk-width-medium-1-1 uk-row-first">
              <AboutMe />
              <Awards />
              <Interests />
          </div>
        </div>
      </div>
    </div>
  )
}
