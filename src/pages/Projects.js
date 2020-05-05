import React from 'react';
import UIkit from 'uikit';
import '../styles/projects.scss';

import ProjectItems from '../components/Projects/ProjectItems';

import {
  Image
} from 'react-bootstrap';

export default () => {

  return (
    <div className="uk-container uk-container-center">
      <div className="uk-block-default">
        <div className="tm-middle uk-grid" data-uk-grid-match data-uk-grid-margin>
          <div className="uk-width-medium-1-1">
            <div className="uk-text-center">
              <h1>Projects</h1>
            </div>
            <ProjectItems />
          </div>
        </div>
      </div>
    </div>
  )
}
