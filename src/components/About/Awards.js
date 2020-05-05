import React from 'react';

export default () => {
  const awards = [
    {
      text: 'Alan Wright Award for being a Genuinely Excellent Human Being',
      img: 'https://images.unsplash.com/photo-1588458824535-b940dbbb505a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80'
    },
    {
      text: 'Caltex All Rounder Medal',
      img: 'https://images.unsplash.com/photo-1588458824535-b940dbbb505a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80'
    },
    {
      text: 'StayHomeHack Team Lead',
      img: 'https://images.unsplash.com/photo-1588458824535-b940dbbb505a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80'
    }
  ]

  const displayAwards = () => {
    return awards.map((award, i) => {
      console.log(award);
      return (
        <div key={i} className="uk-panel uk-text-center">
          <div className="uk-inline-clip uk-transition-toggle" tabIndex="0">
            <img src={award.img}/>
            <div className="uk-overlay uk-overlay-primary uk-transition-fade uk-position-cover uk-flex uk-flex-center uk-flex-middle">
              <p className="uk-h4 uk-margin-remove">{award.text}</p>
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Awards and Recognition</h1>
      <div className="uk-grid-column-medium uk-grid-row-large uk-child-width-1-3@s uk-text-center uk-margin-large" data-uk-grid>
        {displayAwards()}
      </div>
    </div>

  )
}
