import React from 'react';

import {
  Image
} from 'react-bootstrap';

export default () => {
    const profileImageURL = 'https://firebasestorage.googleapis.com/v0/b/mitchell-browne.appspot.com/o/profileImage%2Fmitchell_browne_sei36_bw_even_lower_quality.jpg?alt=media&token=1485a817-dc53-4fad-afec-be05f84aae32';

  return (
    <div className="uk-text-center uk-margin-medium-top uk-margin-medium-bottom">
      <h1 className="portfolio-header uk-margin-small-bottom">Hi! I'm Mitch</h1>
      <Image className='profile-image uk-margin-small-bottom' src={profileImageURL} alt='Mitchell Browne Profile Image' roundedCircle/>
      <p className="portfolio-text">
        When I was 14, I received a how-to book on HTML and CSS as a present. It was given to me after I had tirelessly recreated, line by line, span by span, the PIXAR website of the time, which was not an overly complex website...</p>
      <p className="portfolio-text">
        Fast forward ten years and I have made the return to software engineering.
      </p>
      <p className="portfolio-text">
        The return made sense as I have a knack for both creativity and logic. Finding it natural to apply the knowledge of programming and web design attained in the Software Engineering Immersive course at General Assembly, I am driven to make a positive impact at the intersection of design and technology.
      </p>
      <p className="portfolio-text">
        I am an effective communicator who understands problems from both a development and business perspective. Those who work with me acknowledge I am personable and dedicated, eager to contribute technically and professionally.
      </p>
    </div>
  )
}
