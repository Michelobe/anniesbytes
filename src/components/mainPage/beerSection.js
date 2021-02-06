import React, {Component} from 'react';

export default class Beer extends Component {
    constructor(){
        super();
        this.state={};
    }

    render(){
        return(
            <div className="marginContainer">
                <section id="beerSection">
                    <div className="beerImg">
                        <img src="https://m.psecn.photoshelter.com/img-get/I0000tjXUOjetmUo/s/1200/I0000tjXUOjetmUo.jpg" alt="Row of beers" />
                    </div>
                    <div className="beerInfo">
                        <h1>Portland Micro Brews</h1>
                        <p>These uber-creative mad beer scientists were among Portland's first CSB ambassadors and the urban farmhouse’s killer program is still going strong. Memberships come in six month allocations, run $185 each, and provide thirsty supporters with a variety of monthly bottles or cans plus glasses, a t-shirt, a ball cap, and 13% off everything else whenever you want.</p>
                        <div className="beerBtn">
                            Shop Brews
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}