import React, {Component} from "react";

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
                        <h1>AnniesBytes</h1>
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