import React, { Component } from 'react';
import FooterConfig from './../FooterConfig/FooterConfig.js'
import { Grid, Row, Col } from 'react-bootstrap';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <FooterConfig/>
                <section className="row color-white">
                    <div className="col-lg-8 col-lg-offset-2 text-center">
                        <h2 className="section-heading">My Contact Information</h2>
                        <hr className="primary"/>
                    </div>
                    <div className="col-lg-4 col-lg-offset-2 text-center">
                        <i className="glyphicon glyphicon-earphone"></i>
                        <p>0722673899</p>
                    </div>
                    <div className="col-lg-4 text-center">
                        <i className="glyphicon glyphicon-envelope"></i>
                        <p><a href="mailto:nichsici.dejan@gmail.com">nichsici.dejan@gmail.com</a></p>
                    </div>
                </section>
            </footer>
        );
    }
}

export default Footer;