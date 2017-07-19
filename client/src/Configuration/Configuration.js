import React, { Component } from 'react';
import Login from './../Login/Login.js';
import GeneralConfiguration from './../GeneralConfiguration/GeneralConfiguration.js'
import './Configuration.css';

class Configuration extends Component {
    render() {
        return (
            <div>
                <Login login={this.props.login}
                       logout={this.props.logout}
                       loggedIn = {this.props.loggedIn}
                />

                { this.props.loggedIn ? (<GeneralConfiguration backgroundColor={this.props.backgroundColor} generalChanges={this.props.generalChanges} fluid={this.props.fluid}/>) : "" }
            </div>
        );
    }
}

export default Configuration;