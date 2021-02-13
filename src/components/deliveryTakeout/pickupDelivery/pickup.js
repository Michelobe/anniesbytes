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
                    <div className="pickupInfo">
                        <p>Find the nearest store</p>
                        <input type="text" id="loc" name="loc" placeholder="Search by city, state, or ZIP" />
                        <div className="storeLocation">
                            <i className="fas fa-dot-circle"></i>
                            <div className="storeInfo">
                                <h6>Annie's Bytes</h6>
                                <p>1219 SW Park Ave</p>
                                <p>Portland, Oregon 97205</p>
                                <p className="closingInfo">Closing soon</p>
                                <p className="closingInfo">Open till 8:00pm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}