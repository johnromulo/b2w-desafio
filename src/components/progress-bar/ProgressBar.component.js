import React, { Component } from 'react';
import './ProgressBar.css';

export default class ProgressBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ProgressBar">
                <div className="skill-label"> {this.props.skill.name}</div>
                <div className="progress-bar">
                    <div style={{ width: this.props.skill.value}} className="progress-bar-content"></div>
                </div>
            </div>
        );
    }
}
