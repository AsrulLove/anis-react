import React, { Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {
    constructor (props) {
        super(props);
        this.state = {
            header: "ini headers",
            content: "Ini content"
        }
    }
    render() {
        return (
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>{this.state.header}</h2>
              <p>{this.props.textIn}</p>
            </div>
        );
    }
}

export default Header
