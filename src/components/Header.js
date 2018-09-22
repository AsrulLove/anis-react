import React, { Component } from 'react';
import logo from '../logo.svg';
import axios from 'axios'

class Header extends Component {
    constructor (props) {
        super(props);
        this.state = {
            header: "ini headers",
            content: "Ini content"
        }
        this.getData = this.getData.bind(this)
    }
    getData () {
        axios({
            url: 'https://swapi.co/api/people',
            method: 'get'
        })
            .then(found => {
                let data = found.data.results[0].name
                console.log(this.state.header)
                this.setState(() => ({
                    header: data
                }))
            })
    } 
    render () {
        return (
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>{this.state.header}</h2>
                <p>{this.props.textIn}</p>
                <button onClick={this.getData}>
                    Activate Lasers
                </button>
            </div>
        );
    }
}

export default Header
