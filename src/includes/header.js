import React, { Component } from 'react';

export default class Header extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="marginContainer">
                <section className="header">
                    <ul className="logoMenu">
                        <li><i className="fas fa-pizza-slice"></i></li>
                        <li>Menu</li>
                        <li>Catering</li>
                        <li>Store</li>
                        <li>Gift Cards</li>
                    </ul>
                    <ul className="orderMenu">
                        <li>Pickup</li>
                        <li>Delivery</li>
                        <li>Reserve</li>
                    </ul>
                </section>
            </div>
        );
    }
}