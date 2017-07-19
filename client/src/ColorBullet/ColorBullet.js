import React, { Component } from 'react';
import './ColorBullet.css';

class ColorBullet extends Component {
    render() {
        var style = {
            backgroundColor: this.props.color
        };
        return (
            <span
                className="color-bullet"
                style={style}
            >

            </span>
        );
    }
}

export default ColorBullet;