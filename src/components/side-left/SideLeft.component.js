import React, { Component } from 'react';
import './SideLeft.css';
import ProgressBar from '../progress-bar/ProgressBar.component';

export default class SideLeft extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="SideLeft">
                <div className="header">
                    <img className="avatar"
                        src={
                            this.props.person.profile.image.replace("github.com","raw.githubusercontent.com").replace("blob/","")
                           } />
                    <div className="person-name">{this.props.person.profile.name}</div>
                    <div className="person-profession">{this.props.person.profile.profession}</div>
                </div>
                <div className="line"></div>
                <div className="content">
                    <div className="profile-label">Profile</div>
                    <div className="line2"></div>
                    <div className="profile-description">
                        {this.props.person.profile.description}
                    </div>

                    <div className="profile-label">Contact</div>
                    <div className="line2"></div>
                    <div className="profile-description">
                        {this.props.person.profile.contact.tel} <br></br>
                        {this.props.person.profile.contact.cel}
                    </div>
                    <div className="profile-description">  {this.props.person.profile.contact.address}</div>
                    <div className="profile-description">
                        {this.props.person.profile.contact.website} <br></br>
                        {this.props.person.profile.contact.mail}
                    </div>

                    <div className="profile-label">Skills</div>
                    <div className="line2"></div>

                    {
                        this.props.person.profile.skills.map(skill => {
                            return (
                                <ProgressBar key={skill.name}  skill={skill} />
                            )
                        })
                    }
    
                </div>
            </div>
        );
    }
}
