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
                    <div className="topSection">
                        <h1>Annie's Bytes</h1>
                        <i class="fas fa-pizza-slice"></i>
                    </div>
                    <p>Coming Soon!</p>
                </div>
            </div>
        );
    }
}