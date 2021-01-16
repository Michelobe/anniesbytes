import React, { Component } from 'react';

export default class Header extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
              <div className="soon">
                <h2>Annie's Bytes</h2>
                <p>Coming Soon!</p>
              </div>
            </div>
        );
    }
}