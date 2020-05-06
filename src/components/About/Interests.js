import React from 'react';

export default () => {
  const interests = [
    {
      text: 'Sport',
      img: 'https://images.unsplash.com/photo-1588458824535-b940dbbb505a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80'
    },
    {
      text: 'Music',
      img: 'https://images.unsplash.com/photo-1588458824535-b940dbbb505a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80'
    },
    {
      text: 'Machine Learning',
      img: 'https://images.unsplash.com/photo-1588458824535-b940dbbb505a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80'
    },
    {
      text: 'Cheap Art',
      img: 'https://images.unsplash.com/photo-1588458824535-b940dbbb505a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80'
    }
  ]

  const displayInterests = () => {
    return interests.map((interest, i) => {
      return (
        <div key={i} className="uk-panel uk-text-center">
          <div className="uk-inline-clip uk-transition-toggle" tabIndex="0">
            <img src={interest.img}/>
            <div className="uk-overlay uk-overlay-primary uk-transition-fade uk-position-cover uk-flex uk-flex-center uk-flex-middle">
              <p className="uk-h4 uk-margin-remove portfolio-text">{interest.text}</p>
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <div>
      <h1 className="portfolio-header">Passions and Interests</h1>
      <div className="uk-grid-column-medium uk-grid-row-large uk-child-width-1-3@s uk-text-center uk-margin-large" data-uk-grid>
        {displayInterests()}
      </div>
    </div>

  )
}
