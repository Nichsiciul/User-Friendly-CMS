import React, { Component } from 'react';
import { Col, Form, FormControl, FormGroup, ControlLabel, Glyphicon, Button, Panel } from 'react-bootstrap';
import './FooterConfig.css';

class FooterConfig extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            open: false
        };
    }

    render() {
        return (
            <div className="position-relative">
                <Button className="edit-button"
                        bsStyle="info"
                        onClick={() => this.setState({ open: !this.state.open })}>
                    <Glyphicon glyph="edit" />
                </Button>

                <Panel collapsible
                       expanded={this.state.open}
                       header="Component Configurations"
                       bsStyle="primary">
                    <Form horizontal>
                    </Form>
                </Panel>
            </div>
        );
    }
}

export default FooterConfig;