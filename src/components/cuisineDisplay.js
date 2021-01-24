import React, {Component} from 'react';

export default class Cuisine extends Component {
    constructor() {
        super();
        this.state={};
    }

    render() {
        return(
            <div className="marginContainer">
                <section id="cuisineDisplay">
                    <h1>Discover Oregon Cuisine</h1>
                    <div className="cuisineMenu">
                        <div className="cuisineLi">
                            <div className="cuisinePic menuPic"></div>
                            <h1>Menu</h1>
                        </div>
                        <div className="cuisineLi">
                            <div className="cuisinePic storePic"></div>
                            <h1>Store</h1>
                        </div>
                        <div className="cuisineLi">
                            <div className="cuisinePic cateringPic"></div>
                            <h1>Catering</h1>
                        </div>
                    </div>
                    <div className="bookTableBtn">
                        Book a Table
                    </div>
                </section>
            </div>
        );
    }
}