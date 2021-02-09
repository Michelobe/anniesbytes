import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class MainHeader extends Component {
    constructor() {
        super();
        this.state = {
            isActive: false
        };
        this.clickMenu=this.clickMenu.bind(this);

    }


    clickMenu =() => {
        if (this.state.isActive === true){
            this.setState({
                isActive: !true
            })
        }else{
            this.setState({
                isActive: !false
            })
        }
    }

    render() {
        return (
            <div className="marginContainer">
                <section id="header">
                    {/* <<<<<<<<<<<<<<<<<<<<<<<<< LEFT <<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
                    <div className="headerLeft">
                        <h1>AB</h1>
                        <ul className="logoMenu">
                            <li>Menu</li>
                            <li>Catering</li>
                            <li>Store</li>
                            <li>Gift Cards</li>
                        </ul>
                        {/* ============= MOBILE HEADER LEFT ============= */}
                        <div className="mobileCartLeft">
                            <Link to='/'>
                                <h1>AnniesBytes</h1>
                            </Link>
                        </div>
                        {/* ============= MOBILE HEADER LEFT ============= */}
                    </div>



                    {/* >>>>>>>>>>>>>>>>>>>>>>>>>> RIGHT >>>>>>>>>>>>>>>>>>>>>>>  */}
                    <div className="headerRight">
                        <ul className="orderMenu">
                            <li>Pickup</li>
                            <li>Delivery</li>
                            <li>Reserve</li>
                        </ul>
                        {/* ============= MOBILE HEADER RIGHT ============= */}
                        <div className="mobileCartRight">
                            <i className="fas fa-search"></i>
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                        {/* ============= MOBILE HEADER RIGHT ============= */}
                        <div className="menuBtn" onClick={this.clickMenu}>
                            <i className="fas fa-bars"></i>
                        </div>
                    </div>
                    <div className={`halfMenu leftMenu ${this.state.isActive ? 'active' : ''}`}>
                        <p>Gift Cards</p>
                        <p>Reserve</p>
                    </div>
                    <div className={`halfMenu rightMenu ${this.state.isActive ? 'active' : ''}`}>
                        <p>Menu</p>
                        <Link to="/:order">
                            <p>Store</p>
                        </Link>
                        <div className="exitBtn" onClick={this.clickMenu}>
                            <i className="far fa-times-circle"></i>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}