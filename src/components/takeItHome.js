import React, {Component} from'react';

export default class TakeIt extends Component{
    constructor(){
        super();
        this.state={};
    }

    render(){
        return(
            <div className="takeItContainer">
                <div className="marginContainer">
                    <h2>Take it home</h2>
                    <h1>We Deliver</h1>
                    <div className="btnContainer">
                        <div className="takeBtn">Delivery</div>
                        <div className="takeBtn middleBtn">Pickup</div>
                        <div className="takeBtn">Catering</div>
                    </div>
                </div>
            </div>
        );
    }
}