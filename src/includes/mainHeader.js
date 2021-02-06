import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class MainHeader extends Component {
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
                    <Link to="/:order">
                        <div className="menuBtn">
                            <i className="fas fa-bars"></i>
                        </div>
                    </Link>
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