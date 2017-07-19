import React, { Component } from 'react';

import Configuration from './../Configuration/Configuration.js';
import Header from './../Header/Header.js';
import Components from './../Components/Components.js';
import Footer from './../Footer/Footer.js';
import axios from 'axios';
import ScrollableAnchor from 'react-scrollable-anchor'
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        let config = window.global.general;
        this.state = {
            loggedIn: false,
            fluid: config.fluid,
            backgroundColor: config.backgroundColor
        };
    }

    login = (user, pass) => {
        var data = {
            username: user,
            password: pass
        };

        axios.post("/api/login", data).then((response) => {
            if(response.data.authentication){
                this.setState({loggedIn: true});
            }
            else{
                //handle not auth
            }

        });

    };

    logout = () => {
        console.log("LOGOUT");
        this.setState({loggedIn: false});
    };

    generalConfigChanges = (changes) => {
        console.log("in app", changes);
        this.setState(changes);
    };

    render() {
        return (
        <div style={{backgroundColor:this.state.backgroundColor}}>
            <div className={this.state.fluid ? "contianer-fluid" : "container"}>
                <Configuration
                    login={this.login.bind(this)}
                    logout={this.logout.bind(this)}
                    loggedIn={this.state.loggedIn}
                    backgroundColor={this.state.backgroundColor}
                    generalChanges={this.generalConfigChanges}
                    fluid={this.state.fluid}
                />
                <Header loggedIn={this.state.loggedIn}/>
                <ScrollableAnchor id={'components'}>
                    <Components loggedIn={this.state.loggedIn}/>
                </ScrollableAnchor>
                <Footer/>
            </div>
        </div>
    );
    }
}

export default App;
