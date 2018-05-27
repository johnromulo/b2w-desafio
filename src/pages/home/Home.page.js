import React, { Component } from 'react';
import './Home.css';
import SideLeft from '../../components/side-left/SideLeft.component';
import ContainerInfo from '../../components/container-info/ContainerInfo.component';
import PersonService from './Person.service';
import { Person } from '../../domains/person';


export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { person: Person };
    }

    componentWillMount() {
        this.props.store.subscribe(() => {
            this.setState({ person: this.props.store.getState().personReducer });
        });
    }

    getInfoPerson() {
        this.props.store.dispatch(PersonService.getInfoPerson());
    }


    componentDidMount() {
        this.getInfoPerson();
    }

    render() {
        return (
            <div className="Home">
                <SideLeft person={this.state.person} />
                <ContainerInfo person={this.state.person} />
            </div>
        );
    }
}
