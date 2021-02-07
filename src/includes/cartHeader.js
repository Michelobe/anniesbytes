import React, {Component} from "react";
import {Link} from 'react-router-dom';

export default class CartHeader extends Component {
    constructor(){
        super();
        this.state ={};
    }

    render(){
        return(
            <div id="cartHeader">
                <div className="marginContainer">
                    <div className="cartLeft">
                        <Link to='/'>
                            <h1>AnniesBytes</h1>
                        </Link>
                        <h3>Home</h3>
                        <h3>Menu</h3>
                    </div>
                    <div className="cartRight">
                        <i className="fas fa-search"></i>
                        <i className="fas fa-shopping-cart"></i>
                    </div>
                </div>
            </div>
        );
    }
}