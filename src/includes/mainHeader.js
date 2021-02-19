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
                isActive: false
            })
        }else{
            this.setState({
                isActive: true
            })
        }
    }

    render() {
        return (
            <div className="marginContainer">
                <section id="header">
                    {/* <<<<<<<<<<<<<<<<<<<<<<<<< LEFT <<<<<<<<<<<<<<<<<<<<<<<<<<<< */}
                    <div className="headerLeft">
                        <Link to={`/`} className="mainH1">
                            <h1>AB</h1>
                        </Link>
                        <ul className="logoMenu">
                            <Link to={`/menu`}>
                                <li>Menu</li>
                            </Link>
                            <li>Catering</li>
                            <li>Store</li>
                            <li>Gift Cards</li>
                        </ul>
                        {/* ============= MOBILE HEADER LEFT ============= */}
                        <div className="mobileCartLeft">
                            <Link to={`/`}>
                                <h1>AnniesBytes</h1>
                            </Link>
                        </div>
                        {/* ============= MOBILE HEADER LEFT ============= */}
                    </div>



                    {/* >>>>>>>>>>>>>>>>>>>>>>>>>> RIGHT >>>>>>>>>>>>>>>>>>>>>>>  */}
                    <div className="headerRight">
                        <ul className="orderMenu">
                            <Link to={`/order`}>
                                <li>Pickup</li>
                            </Link>
                            <Link to={`/order`}>
                                <li>Delivery</li>
                            </Link>
                            <li>Reserve</li>
                        </ul>
                        {/* ============= MOBILE HEADER RIGHT ============= */}
                        <div className="mobileCartRight">
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                        <div className="menuBtn" onClick={this.clickMenu}>
                            <i className="fas fa-bars"></i>
                        </div>
                    </div>
                    {/* ================================= MENU ACCORDIAN =========================== */}
                    <div className={`halfMenu leftMenu ${this.state.isActive ? 'active' : ''}`}>
                        <p onClick={this.clickMenu}>Search</p>
                        <p onClick={this.clickMenu}>Reserve</p>
                    </div>
                    <div className={`halfMenu rightMenu ${this.state.isActive ? 'active' : ''}`}>
                        <p onClick={this.clickMenu}>Menu</p>
                        <Link to="/order" onClick={this.clickMenu}>
                            <p>Store</p>
                        </Link>
                        <div className="exitBtn" onClick={this.clickMenu}>
                            <i className="far fa-times-circle"></i>
                        </div>
                    </div>
                    {/* ================================= MENU ACCORDIAN =========================== */}
                </section>
            </div>
        );
    }
}