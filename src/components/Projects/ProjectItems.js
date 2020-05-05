import React from 'react';

export default () => {
  const projects = [
    {
      title: 'helpDelivered',
      desc: 'Project of the Gods...',
      imgs: [
        'https://images.unsplash.com/photo-1588485620419-59efc8fbb9f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1588453905598-901a53787ee3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
      ]
    },
    {
      title: 'FitLink',
      desc: 'More godly projects...',
      imgs: [
        'https://images.unsplash.com/photo-1588485620419-59efc8fbb9f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1588453905598-901a53787ee3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
      ]
    },
    {
      title: 'JamSample',
      desc: 'More godly projects...',
      imgs: [
        'https://images.unsplash.com/photo-1588485620419-59efc8fbb9f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1588453905598-901a53787ee3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
      ]
    },
  ]

  const displayProjects = () => {
    return projects.map((project, i) => {
      console.log(project);
      return (
        <div key={i} className="uk-grid-collapse uk-child-width-expand@s uk-text-center uk-margin-large" data-uk-grid>
          <div className="uk-panel">
            <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" data-uk-slideshow>
              <ul className="uk-slideshow-items">
                <li className="project-slideshow-item" data-slideshow-slide="img">
                  <img className="project-image" src={project.imgs[0]} alt="" uk-cover />
                </li>
                <li>
                  <img className="project-image" src={project.imgs[1]} alt="" uk-cover />
                </li>
              </ul>
              <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slideshow-item="previous"></a>
              <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slideshow-item="next"></a>
            </div>
          </div>
          <div className="uk-panel uk-background-default">
            <div className="uk-padding">
              <h1>{project.title}</h1>
              <p>{project.desc}</p>
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <div>
      {displayProjects()}
    </div>

  )
}
