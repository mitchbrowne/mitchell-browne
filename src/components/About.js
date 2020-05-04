import React from 'react';
import '../styles/about.scss';

import {
  Image
} from 'react-bootstrap';

export default () => {
  const profileImageURL = 'https://firebasestorage.googleapis.com/v0/b/mitchell-browne.appspot.com/o/profileImage%2Fmitchell_browne_sei36_bw_low_quality.jpg?alt=media&token=b2d7d805-38a5-4462-81e4-894716fe0947';

  return (
    <div className="uk-container uk-container-center">
      <div className="uk-block-default">
        <div className="tm-middle uk-grid" data-uk-grid-match data-uk-grid-margin>
          <div className="uk-width-medium-1-1 uk-row-first">
            <div className="uk-text-center">
              <h1>About</h1>
              <Image className='profile-image' src={profileImageURL} alt='Mitchell Browne Profile Image' roundedCircle/>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
