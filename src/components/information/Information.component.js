import React, { Component } from 'react';
import './Information.css';

export default class Information extends Component {

    render() {
        return (
            <div className="Information">
                <div className="title">{this.props.info.name}</div>
                <div className="date">{this.props.info.date}</div>
                <div className="description">
                    {this.props.info.description}
                </div>
            </div>
        );
    }
}
