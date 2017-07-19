import React, { Component } from 'react';
import HeaderConfig from './../HeaderConfig/HeaderConfig.js';
import { Grid, Row, Col } from 'react-bootstrap';
import { goToAnchor, configureAnchors } from 'react-scrollable-anchor'
import './Header.css';

class Header extends Component {
    constructor(props) {
        var config = window.global.header;
        super(props);
        this.state = {
            buttonText: config.buttonText || "Button text",
            title : config.title || "Page title",
            subtitle: config.subtitle || "Page subtitle",
            showButton: config.showButton,
            showLine: config.showLine,
            titleColor: config.titleColor || "#ffffff",
            subtitleColor: config.subtitleColor || "#ffffff",
            lineColor: config.lineColor || "#ffffff",
            buttonColor: config.buttonColor || "#337ab7",
            buttonTextColor: config.buttonTextColor || "#ffffff"
        };
    }

    headerChanged = (changes) => {
        this.setState(changes);
    };

    clickScroll = (event) => {
        event.preventDefault();
        goToAnchor('components', true);
    };

    render() {
        configureAnchors({offset: 0, scrollDuration: 1000});
        return (
            <div>
                { this.props.loggedIn ? (<HeaderConfig {...this.state} headerChanged={this.headerChanged.bind(this)}/>) : "" }
                <header>
                    <div className="header-content">
                        <div className="header-content-inner">
                            <h1 style={{color: this.state.titleColor}}>{this.state.title}</h1>
                            { this.state.showLine ? (<hr style={{borderTopColor: this.state.lineColor}}/>) : "" }
                            <p style={{color: this.state.subtitleColor}}>{ this.state.subtitle }</p>
                            { this.state.showButton ? (
                                <a className="btn btn-primary btn-xl page-scroll"
                                   style={{
                                       backgroundColor: this.state.buttonColor,
                                       borderColor: this.state.buttonColor,
                                       color: this.state.buttonTextColor
                                   }}
                                   onClick={this.clickScroll}
                                >
                                    { this.state.buttonText }
                                </a>
                            ) : ""
                            }

                        </div>
                    </div>
                </header>
            </div>
        );
    }
}




export default Header;