import React from 'react';
import UIkit from 'uikit';
import '../styles/projects.scss';

import {
  Image
} from 'react-bootstrap';

export default () => {
  const projectItems = () => {
    return (
      <div className="uk-grid-collapse uk-child-width-expand@s uk-text-center uk-margin-large" data-uk-grid>
        <div className="uk-panel">
          <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" data-uk-slideshow>
            <ul className="uk-slideshow-items">
              <li className="project-slideshow-item" data-slideshow-slide="img">
                <img className="project-image" src="https://images.unsplash.com/photo-1588485620419-59efc8fbb9f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" uk-cover />
              </li>
              <li>
                <img className="project-image" src="https://images.unsplash.com/photo-1588453905598-901a53787ee3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" uk-cover />
              </li>
            </ul>
            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slideshow-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slideshow-item="next"></a>
          </div>
        </div>
        <div className="uk-panel uk-background-default">
          <div className="uk-padding">
            <h1>Project One</h1>
            <p>Designed by the gods themselves...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="uk-container uk-container-center">
      <div className="uk-block-default">
        <div className="tm-middle uk-grid" data-uk-grid-match data-uk-grid-margin>
          <div className="uk-width-medium-1-1 uk-row-first">
            <div className="uk-text-center">
              <h1>Projects</h1>
            </div>
            {projectItems()}
          </div>
        </div>
      </div>
    </div>
  )
}

{/* <div className="uk-block-default">
  <h1>Projects</h1>
  <div className="uk-grid" data-uk-grid-match data-uk-grid-margin>
    <div className="uk-width-medium-1-1 uk-row-first">
      <main>
        <article className="uk-article">
          <div className="uk-grid uk-margin-large">
            <div className="uk-panel uk-width-medium-1-2">
              <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" data-uk-slideshow>
                <ul className="uk-slideshow-items projects-slideshow-items">
                  <li className="project-slideshow-item" data-slideshow-slide="img">
                    <img className="project-image" src="https://images.unsplash.com/photo-1588485620419-59efc8fbb9f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" uk-cover />
                  </li>
                  <li>
                    <img className="project-image" src="https://images.unsplash.com/photo-1588453905598-901a53787ee3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" uk-cover />
                  </li>
                </ul>
                <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slideshow-item="previous"></a>
                <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slideshow-item="next"></a>
              </div>
            </div>
            <div className="uk-panel white-panel uk-width-medium-1-2">
              <h1>HEY</h1>
            </div>
          </div>

        </article>

      </main>


    </div>
  </div>
  </div> */}
