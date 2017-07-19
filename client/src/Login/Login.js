import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Form, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';
import './Login.css';

class Login extends Component {
    triggerLogin = (event, data) => {
        event.preventDefault();
        var user = ReactDOM.findDOMNode(this.refs.username).value;
        var pass = ReactDOM.findDOMNode(this.refs.password).value;
        this.props.login(user, pass);
    };

    triggerLogout = () => {
        this.props.logout();
    };

    render() {
        return (
            <div>
                { this.props.loggedIn ? (
                    <div className="logout">
                        <Form>
                            <Button bsStyle="primary" onClick={this.triggerLogout}>
                                Logout
                            </Button>
                        </Form>
                    </div>) : (<div className="login">
                    <Form inline onSubmit={this.triggerLogin}>
                        <FormGroup controlId="username">
                            <ControlLabel>Username</ControlLabel>
                            {' '}
                            <FormControl ref="username" type="text"/>
                        </FormGroup>
                        {' '}
                        <FormGroup controlId="password">
                            <ControlLabel>Password</ControlLabel>
                            {' '}
                            <FormControl ref="password" type="password" />
                        </FormGroup>
                        {' '}
                        <Button bsStyle="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </div>) }


            </div>
        );
    }
}

export default Login;