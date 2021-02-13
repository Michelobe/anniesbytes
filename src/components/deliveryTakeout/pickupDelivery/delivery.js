import React, {Component} from 'react';

export default class Delivery extends Component{
    constructor(){
        super();
        this.state={};
    }

    render(){
        return(
            <div className="deliveryOptions">
                <div className="marginContainer">
                    <div className="deliveryInfo">
                        <p>Enter your Address</p>
                        <input type="text" id="street" name="street" placeholder="Street Address" />
                        <input type="text" id="state" name="state" placeholder="State" />
                        <input type="text" id="zip" name="zip" placeholder="ZIP" />
                    </div>
                </div>
            </div>
        );
    }
}