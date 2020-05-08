import React from 'react';
import UIkit from 'uikit';

import Skill from '../components/Skills/Skill';
import SkillsObject from '../components/Skills/SkillsObject';

export default () => {
  const skills = SkillsObject();

  return (
    <div className="uk-container uk-container-center">
      <div className="uk-block-default">
        <div className="uk-text-center uk-margin-medium-top uk-margin-medium-bottom">
          <h1 className="portfolio-header">Skills</h1>
        </div>
          <div className="uk-width-medium-1-1 uk-row-first">
            <div>
              <div className="uk-grid-column-medium uk-grid-row-large uk-child-width-1-2@s uk-text-center uk-margin-large" data-uk-grid>
              {
                skills.map(skill => <Skill category={skill.category} skills={skill.skills}/>)
              }
              </div>
            </div>

          </div>
      </div>
    </div>
  )
}
