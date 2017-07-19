import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Col, Form, FormGroup, ControlLabel, Glyphicon, Button, Panel } from 'react-bootstrap';
import axios from 'axios';
import { SliderPicker } from 'react-color';
import ColorBullet from './../ColorBullet/ColorBullet.js';
import './GeneralConfiguration.css';

class GeneralConfiguration extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            open: false
        };
    }

    changes = (color) => {
        let changes;
        if(color.hex){
            changes = {
                fluid: ReactDOM.findDOMNode(this.refs.fluid).checked,
                backgroundColor: color.hex
            };
        }
        else{
            changes = {
                fluid: ReactDOM.findDOMNode(this.refs.fluid).checked,
                backgroundColor: this.props.backgroundColor
            };
        }

        this.props.generalChanges(changes);
    };

    submitChanges = (event) => {
        event.preventDefault();
        axios.put("/api/general", this.props).then((response)=>{
            if(response.data.success){
                alert("data saved");
            }
            else{
                alert("ERROR")
            }
        });
    };

    render() {
        return (
            <div className="position-relative">
                <Button className="edit-button"
                        bsStyle="info"
                        onClick={()=> this.setState({ open: !this.state.open })}>
                    <Glyphicon glyph="edit" />
                </Button>
                <Panel collapsible
                       expanded={this.state.open}
                       header="General Configurations"
                       bsStyle="primary">
                    <Form horizontal onSubmit={this.submitChanges}>

                        <FormGroup controlId="LineColor">
                            <Col componentClass={ControlLabel} sm={2}>
                                Background Color
                            </Col>
                            <Col sm={1} className="text-center">
                                <ColorBullet color={this.props.backgroundColor}/>
                            </Col>
                            <Col sm={9}>
                                <SliderPicker color={this.props.backgroundColor} onChangeComplete={this.changes}/>
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={2}>
                                Full Screen
                            </Col>
                            <Col sm={10}>
                                <div className="checkbox-wrap">
                                    <input
                                        type="checkbox"
                                        checked={this.props.fluid}
                                        ref="fluid"
                                        onChange={this.changes}
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
        );
    }
}

export default GeneralConfiguration;