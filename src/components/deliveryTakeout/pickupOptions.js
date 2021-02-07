import React, {Component} from 'react';

export default class Pickup extends Component{
    constructor(){
        super();
        this.state={};
    }

    render(){
        return(
            <div className="pickupOptions">
                <div className="marginContainer">
                    <h1>Bevri</h1>
                    <p>1219 SW Park Ave, Portland, OR 97205</p>
                </div>
            </div>
        );
    }
}