import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Comp.css';
import CompConfig from './../CompConfig/CompConfig.js';
import reactLogo from './react-logo.png';
import expressLogo from './express-logo.png';
import mongoLogo from './mongodb-logo.png';

class Comp extends Component {
    constructor(...args) {
        super(...args);
        let config = window.global.components[this.props.position];
        this.state = {
            type: config.type,
            title: config.title,
            hasLine: config.hasLine,
            content: config.content
        };
    }

    componentChanged = (changes) => {
        this.setState(changes)
    };

    render() {
        return (
            <div className="color-white">
                { this.props.loggedIn ? (<CompConfig {...this.state} componentChanged={this.componentChanged} unique={this.props.unique}/>) : "" }
                <section>
                    { this.state.type == "1" ? (
                    <div>
                        <h2 className="content1 text-center">{this.state.title}</h2>
                        { this.state.hasLine ? <hr/> : "" }
                        <p className="content1 text-center"> {this.state.content} </p>
                        <p className="content1 text-center">Content Management is usually done through some sort of autonomous system which takes care of automating the process for humans. A system that allows its users to create, edit and run content through the editorial process we mentioned before. </p>
                    </div>) : "" }

                    { this.state.type == "2" ? (
                        <div>
                                <Row className="show-grid distance">
                                    <Col sm={4} className="img-container">
                                        <img className="react-logo" src={reactLogo} alt="react"/>
                                    </Col>
                                    <Col sm={8}>
                                        React is a JavaScript library that is used to build user interfaces. We create reusable components and these components display data as it changes over time. React was created at Facebook and Instagram and was released initially in March 2013. Although some might confuse React to be a JavaScript framework because of its new mindset, React is only a library for the View part (in an MVC framework for example). For this reason, it cannot be compared to Angular or any other frameworks.
                                    </Col>
                                </Row>

                                <Row className="show-grid distance">
                                    <Col sm={8}>
                                        Express is defined as a light-weight web application framework to help organize your web application into an MVC architecture on the server side. Being a light-weight application  means it does not make too many assumptions but gives you enough to avoid re-inventing the wheel.
                                    </Col>
                                    <Col sm={4} className="img-container">
                                        <img className="express-logo" src={expressLogo} alt="react"/>
                                    </Col>
                                </Row>

                                <Row className="show-grid ">
                                    <Col sm={4} className="img-container">
                                        <img className="mongo-logo" src={mongoLogo} alt="react"/>
                                    </Col>
                                    <Col sm={8}>
                                        MongoDB is a NoSQL database, released to open source in 2009. It differs from relational databases, that use the classic tabular storing techniques of using rows, by having an architecture of collections and documents. Each document is comprised of key-value pairs that are the basic data unit in Mongo.
                                    </Col>
                                </Row>
                        </div>) : "" }
                </section>
            </div>
        );
    }
}

export default Comp;