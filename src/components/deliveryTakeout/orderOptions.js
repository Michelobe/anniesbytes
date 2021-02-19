import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Pickup from './pickupDelivery/pickup.js';
import Delivery from './pickupDelivery/delivery.js';

export default class OrderOptions extends Component{
    constructor(){
        super();
        this.state={
            deliveryPickup: true,
            pickUpActive: 'active',
            deliveryActive: ''
        };
    }

    clickPickup =() => {
        if (this.state.deliveryPickup === false){
            this.setState({
                deliveryPickup: true,
                pickUpActive: 'active',
                deliveryActive: ''
            })
        }
    }
    clickDelivery =() => {
        if (this.state.deliveryPickup === true){
            this.setState({
                deliveryPickup: false,
                pickUpActive: '',
                deliveryActive: 'active'
            })
        }
    }

    showH1 = () => {
        if(this.state.deliveryPickup === true){
            return(<h1>select pickup location</h1>);
        }
        else{
            return(<h1>Enter Delivery Address</h1>);
        }
    }

    render(){
        return(
            <div className='orderOptions'>
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
                        {this.showH1()}
                        <div className="selectPick">
                            <div className={`selectBox pickup ${this.state.pickUpActive}`} onClick={this.clickPickup}>
                                <p>pickup</p>
                            </div>
                            <div className={`selectBox delivery ${this.state.deliveryActive}`}  onClick={this.clickDelivery}>
                                <p>delivery</p>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.deliveryPickup === true ? <Pickup /> : <Delivery />}
                <div className="seeMenuBtn">
                    <Link to={`/menu`}>
                        <p>See Menu</p>
                    </Link>
                </div>
            </div>
        );
    }
}