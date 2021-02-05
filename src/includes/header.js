import React, { Component } from 'react';

export default class Header extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="marginContainer">
                <section id="header">
                    <div className="headerLeft">
                        <h1>AB</h1>
                        <ul className="logoMenu">
                            <li>Menu</li>
                            <li>Catering</li>
                            <li>Store</li>
                            <li>Gift Cards</li>
                        </ul>
                    </div>
                    <div className="headerRight">
                        <ul className="orderMenu">
                            <li>Pickup</li>
                            <li>Delivery</li>
                            <li>Reserve</li>
                        </ul>
                        <a className="menuBtn">
                            <i className="fas fa-bars"></i>
                        </a>
                    </div>
                    {/* <div className="halfMenu leftMenu">
                        <p>Gift Cards</p>
                        <p>Reserve</p>
                    </div>
                    <div className="halfMenu rightMenu">
                        <p>Menu</p>
                        <p>Store</p>
                    </div> */}
                </section>
            </div>
        );
    }
}