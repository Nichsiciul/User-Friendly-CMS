import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Col, Form, FormControl, FormGroup, ControlLabel, Glyphicon, Button, Panel } from 'react-bootstrap';
import axios from 'axios';
import { SliderPicker } from 'react-color';
import ColorBullet from './../ColorBullet/ColorBullet.js';
import './CompConfig.css';

class CompConfig extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            open: false
        };
    }

    changesMade = () => {
        var changes = {
            title: ReactDOM.findDOMNode(this.refs.title).value,
            content: ReactDOM.findDOMNode(this.refs.content).value,
            hasLine: ReactDOM.findDOMNode(this.refs.line).checked,
        };

        this.props.componentChanged(changes);
    };

    submitChanges = (event) => {
        event.preventDefault();
        axios.put('/api/components', this.props).then((data) => {
            console.log(data.data);
        });
    };

    deleteComponent = () => {
        axios.delete('/api/components', {params: { id: this.props.unique }}).then((data) => {
            console.log(data.data);
        });
    };

    render() {
        return (
            <div className="position-relative">
                <Button className="edit-button"
                        bsStyle="info"
                        onClick={() => this.setState({ open: !this.state.open })}>
                    <Glyphicon glyph="edit" />
                </Button>

                <Button className="delete-button"
                        bsStyle="danger"
                        onClick={this.deleteComponent}>
                    <Glyphicon glyph="trash" />
                </Button>

                <Panel collapsible
                       className="color-black"
                       expanded={this.state.open}
                       header="Component Configurations"
                       bsStyle="primary">
                    <Form horizontal onSubmit={this.submitChanges}>

                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={2}>
                                Title
                            </Col>
                            <Col sm={10}>
                                <FormControl
                                    type="text"
                                    value={this.props.title}
                                    ref="title"
                                    onChange={this.changesMade}
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={2}>
                                Content
                            </Col>
                            <Col sm={10}>
                                <FormControl
                                    componentClass="textarea"
                                    value={this.props.content}
                                    ref="content"
                                    onChange={this.changesMade}
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={2}>
                                Show Line
                            </Col>
                            <Col sm={10}>
                                <div className="checkbox-wrap">
                                    <input
                                        type="checkbox"
                                        checked={this.props.hasLine}
                                        ref="line"
                                        onChange={this.changesMade}
                                    />
                                </div>
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col smOffset={2} sm={10}>
                                <Button
                                    type="submit"
                                    bsStyle="primary"
                                >
                                    Save Changes
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Panel>
            </div>
        )
    }
}

export default CompConfig;