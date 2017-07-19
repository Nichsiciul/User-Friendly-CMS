import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FormControl, Col, Form, FormGroup, ControlLabel, Glyphicon, Button, Panel } from 'react-bootstrap';
import axios from 'axios';
import { SliderPicker } from 'react-color';
import ColorBullet from './../ColorBullet/ColorBullet.js';
import './HeaderConfig.css';

class HeaderConfig extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            open: false
        };
    }

    changesMade = (changes) => {
        if (changes.titleColor) {
            this.props.headerChanged(changes);
            return;
        }

        let change = {
            title: ReactDOM.findDOMNode(this.refs.title).value,
            subtitle: ReactDOM.findDOMNode(this.refs.subtitle).value,
            buttonText: ReactDOM.findDOMNode(this.refs.buttonText).value,
            showButton: ReactDOM.findDOMNode(this.refs.showButton).checked,
            showLine: ReactDOM.findDOMNode(this.refs.showLine).checked
        };

        this.props.headerChanged(change);
    };

    headerSave = (event) =>{
            event.preventDefault();
            axios.put("/api/header", this.props).then((response)=>{
                if(response.data.success){
                    alert("data saved");
                }
                else{
                    alert("ERROR")
                }
            });
    };

    titleColor = (color) => {
        let changes = {
            title: ReactDOM.findDOMNode(this.refs.title).value,
            subtitle: ReactDOM.findDOMNode(this.refs.subtitle).value,
            buttonText: ReactDOM.findDOMNode(this.refs.buttonText).value,
            showButton: ReactDOM.findDOMNode(this.refs.showButton).checked,
            showLine: ReactDOM.findDOMNode(this.refs.showLine).checked,
            titleColor: color.hex,
            subtitleColor: this.props.subtitleColor,
            lineColor: this.props.lineColor,
            buttonColor: this.props.buttonColor,
            buttonTextColor: this.props.buttonTextColor
        };

        this.changesMade(changes);
    };

    subtitleColor = (color) => {
        let changes = {
            title: ReactDOM.findDOMNode(this.refs.title).value,
            subtitle: ReactDOM.findDOMNode(this.refs.subtitle).value,
            buttonText: ReactDOM.findDOMNode(this.refs.buttonText).value,
            showButton: ReactDOM.findDOMNode(this.refs.showButton).checked,
            showLine: ReactDOM.findDOMNode(this.refs.showLine).checked,
            titleColor: this.props.titleColor,
            subtitleColor: color.hex,
            lineColor: this.props.lineColor,
            buttonColor: this.props.buttonColor,
            buttonTextColor: this.props.buttonTextColor
        };

        this.changesMade(changes);
    };

    buttonColor = (color) => {
        let changes = {
            title: ReactDOM.findDOMNode(this.refs.title).value,
            subtitle: ReactDOM.findDOMNode(this.refs.subtitle).value,
            buttonText: ReactDOM.findDOMNode(this.refs.buttonText).value,
            showButton: ReactDOM.findDOMNode(this.refs.showButton).checked,
            showLine: ReactDOM.findDOMNode(this.refs.showLine).checked,
            titleColor: this.props.titleColor,
            subtitleColor: this.props.subtitleColor,
            lineColor: this.props.lineColor,
            buttonColor: color.hex,
            buttonTextColor: this.props.buttonTextColor
        };

        this.changesMade(changes);
    };

    buttonTextColor = (color) => {
        let changes = {
            title: ReactDOM.findDOMNode(this.refs.title).value,
            subtitle: ReactDOM.findDOMNode(this.refs.subtitle).value,
            buttonText: ReactDOM.findDOMNode(this.refs.buttonText).value,
            showButton: ReactDOM.findDOMNode(this.refs.showButton).checked,
            showLine: ReactDOM.findDOMNode(this.refs.showLine).checked,
            titleColor: this.props.titleColor,
            subtitleColor: this.props.subtitleColor,
            lineColor: this.props.lineColor,
            buttonColor: this.props.buttonColor,
            buttonTextColor: color.hex
        };

        this.changesMade(changes);
    };

    lineColor = (color) => {
        let changes = {
            title: ReactDOM.findDOMNode(this.refs.title).value,
            subtitle: ReactDOM.findDOMNode(this.refs.subtitle).value,
            buttonText: ReactDOM.findDOMNode(this.refs.buttonText).value,
            showButton: ReactDOM.findDOMNode(this.refs.showButton).checked,
            showLine: ReactDOM.findDOMNode(this.refs.showLine).checked,
            titleColor: this.props.titleColor,
            subtitleColor: this.props.subtitleColor,
            lineColor: color.hex,
            buttonColor: this.props.buttonColor,
            buttonTextColor: this.props.buttonTextColor
        };

        this.changesMade(changes);
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
                       header="Header Configuration"
                       bsStyle="primary">


                    <Form horizontal onSubmit={this.headerSave}>
                        <FormGroup controlId="HeaderTitle">
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

                        <FormGroup controlId="HeaderTitleColor">
                            <Col componentClass={ControlLabel} sm={2}>
                                Title Color
                            </Col>
                            <Col sm={1} className="text-center">
                                <ColorBullet ref="test" color={this.props.titleColor}/>
                            </Col>
                            <Col sm={9}>
                                <SliderPicker color={this.props.titleColor} onChangeComplete={this.titleColor}/>
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="HeaderSubTitle">
                            <Col componentClass={ControlLabel} sm={2}>
                                Subtitle
                            </Col>
                            <Col sm={10}>
                                <FormControl
                                    type="text"
                                    value={this.props.subtitle}
                                    ref="subtitle"
                                    onChange={this.changesMade}
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="HeaderSubTitleColor" >
                            <Col componentClass={ControlLabel} sm={2}>
                                Subtitle Color
                            </Col>
                            <Col sm={1} className="text-center">
                                <ColorBullet color={this.props.subtitleColor}/>
                            </Col>
                            <Col sm={9}>
                                <SliderPicker color={this.props.subtitleColor}  onChangeComplete={this.subtitleColor}/>
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="HeaderButtonText" className={this.props.showButton ? "" : "hidden"}>
                            <Col componentClass={ControlLabel} sm={2}>
                                Button Text
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text"
                                             value={this.props.buttonText}
                                             ref="buttonText"
                                             onChange={this.changesMade}
                                />
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="HeaderButtonColor" className={this.props.showButton ? "" : "hidden"}>
                            <Col componentClass={ControlLabel} sm={2}>
                                Button Color
                            </Col>
                            <Col sm={1} className="text-center">
                                <ColorBullet color={this.props.buttonColor}/>
                            </Col>
                            <Col sm={9}>
                                <SliderPicker color={this.props.buttonColor} onChangeComplete={this.buttonColor}/>
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="HeaderButtonTextColor" className={this.props.showButton ? "" : "hidden"}>
                            <Col componentClass={ControlLabel} sm={2}>
                                Button Text Color
                            </Col>
                            <Col sm={1} className="text-center">
                                <ColorBullet color={this.props.buttonTextColor}/>
                            </Col>
                            <Col sm={9}>
                                <SliderPicker color={this.props.buttonTextColor} onChangeComplete={this.buttonTextColor}/>
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={2}>
                                Show Button
                            </Col>
                            <Col sm={10}>
                                <div className="checkbox-wrap">
                                    <input
                                        type="checkbox"
                                        checked={this.props.showButton}
                                        ref="showButton"
                                        onChange={this.changesMade}
                                    />
                                </div>
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
                                        checked={this.props.showLine}
                                        ref="showLine"
                                        onChange={this.changesMade}
                                    />
                                </div>
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="LineColor" className={this.props.showLine ? "" : "hidden"}>
                            <Col componentClass={ControlLabel} sm={2}>
                                Line Color
                            </Col>
                            <Col sm={1} className="text-center">
                                <ColorBullet color={this.props.lineColor}/>
                            </Col>
                            <Col sm={9}>
                                <SliderPicker color={this.props.lineColor} onChangeComplete={this.lineColor}/>
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

export default HeaderConfig;