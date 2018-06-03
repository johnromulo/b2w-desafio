import React, { Component } from 'react';
import './ContainerInfo.css';
import Information from '../information/Information.component';

export default class ContainerInfo extends Component {

  render() {
    return (
      <div className="ContainerInfo">
        <div className="content">
          <div className="label-text">work experience</div>
          <div className="line"></div>
          <div className="info">
            {
              this.props.person.profile.experience.map(experience => {
                return (
                  <Information key={experience.name} info={experience} />
                )
              })
            }
          </div>

          <div className="label-text">Education</div>
          <div className="line"></div>
          <div className="info">
            {
              this.props.person.profile.education.map(education => {
                return (
                  <Information key={education.name} info={education} />
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
