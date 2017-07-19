import React, { Component } from 'react';
import Comp from './../Comp/Comp.js';
import { Grid, Row, Col } from 'react-bootstrap';
import './Components.css';

class Components extends Component {
    render() {
        var components = window.global.components;
        return (
            <div>
                {components.map((component, index) => {
                    return <Comp
                        key={index}
                        unique={component._id}
                        position = {index}
                        loggedIn={this.props.loggedIn}
                    />;
                })}
            </div>
        );
    }
}

export default Components;