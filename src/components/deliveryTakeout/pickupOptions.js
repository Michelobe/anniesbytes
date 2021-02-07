import React, {Component} from 'react';

export default class Pickup extends Component{
    constructor(){
        super();
        this.state={};
    }

    render(){
        return(
            <div className="pickupOptions">
                <div className="prepJumbo">
                    <div className="marginContainer">
                        <h1>Annie's Bytes</h1>
                        <div className="prepInfo">
                            <p>1219 SW Park Ave, Portland, OR 97205</p>
                            <i className="fas fa-circle"></i>
                            <p>Pickup till 8:00PM</p>
                            <i className="fas fa-circle"></i>
                            <p>Estimated prep time: 30 minutes</p>
                        </div>
                        <div className="pickupTime">
                            <i className="fas fa-map-marker-alt"></i>
                            <p>Pickup ASAP</p>
                            <p className="timeChange">Change time</p>
                        </div>
                    </div>
                </div>
                <div className="selectLoc">
                    <div className="marginContainer">
                        <h1>select pickup location</h1>
                        <div className="selectPick">
                            <div className="selectBox pickup">
                                <p>pickup</p>
                            </div>
                            <div className="selectBox delivery">
                                <p>delivery</p>
                            </div>
                        </div>
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
                            <div className="seeMenuBtn">
                                <p>See Menu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}