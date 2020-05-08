import React from 'react';

export default (props) => {
  return (
      <div key={props.category} className="uk-panel uk-text-center">
        <div className="uk-padding uk-background-default">
          <h1 className="portfolio-header">{props.category}</h1>
          <ul className="uk-list">
            {
              props.skills.map(skill => (<li className="portfolio-text">{skill}</li>))
            }
          </ul>

        </div>
      </div>
  )
}
