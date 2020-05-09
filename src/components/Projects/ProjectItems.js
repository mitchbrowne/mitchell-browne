import React from 'react';
import ProjectsObject from './ProjectsObject';

export default () => {
  const projects = ProjectsObject();

  const displayProjects = () => {
    return projects.map((project, i) => {
      console.log(project);
      return (
        <div key={i} className="uk-grid-collapse uk-child-width-expand@s uk-text-center uk-margin-large" data-uk-grid>
          <div className="uk-panel">
            <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" data-uk-slideshow="autoplay: true">
              <ul className="uk-slideshow-items">
                {project.imgs.map(image => {
                  return (
                    <li className="project-slideshow-item" data-slideshow-slide="img">
                      <img className="projects-image" src={image} alt={`${project.title} site preview`} uk-cover />
                    </li>
                    )
                  })
                }
              </ul>
              <a class="uk-position-center-left uk-position-small uk-hidden-hover slidenav slidenav-contrast" href="#" data-uk-slidenav-previous data-uk-slideshow-item="previous"></a>
              <a class="uk-position-center-right uk-position-small uk-hidden-hover slidenav slidenav-contrast" href="#" data-uk-slidenav-next data-uk-slideshow-item="next"></a>
            </div>
          </div>
          <div className="uk-panel uk-background-default">
            <div className="uk-padding">
              <h1 className="portfolio-header">{project.title}</h1>
              <p className="portfolio-text">{project.desc}</p>
              {/* <div>
                <ul className="uk-list">
                  {
                    project.stackOne.map(skill => (<li className="portfolio-text">{skill}</li>))
                  }
                </ul>
                <ul className="uk-list">
                  {
                    project.stackTwo.map(skill => (<li className="portfolio-text">{skill}</li>))
                  }
                </ul>
              </div> */}
              <p uk-margin>
                  {project.appLink &&
                    <a class="uk-button uk-button-default project-button" href={project.appLink} target="_blank">Live Demo</a>
                  }
                  {project.gitLink &&
                    <a class="uk-button uk-button-default project-button" href={project.gitLink} target="_blank">Github</a>
                  }
                  {project.gitLinkBackend &&
                    <a class="uk-button uk-button-default project-button" href={project.gitLinkBackend} target="_blank">Github Backend</a>
                  }
              </p>
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
