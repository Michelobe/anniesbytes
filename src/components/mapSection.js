import React, {Component} from 'react';

export default class Map extends Component {
    constructor() {
        super();
        this.state={};
    }

    render(){
        return(
            <div className="marginContainer">
                <section id="mapSection">
                    <div className="locationInfo">
                        <h1>Portland</h1>
                        <p>Bars and restaurants can finally sell mixed drinks to-go, and bartenders across the city have leapt into production bottling, canning, and finding any way to get drinks into the hands of takeout customers. Today, many venues are offering their drinks alongside food for pickup, and a few even work with third-party delivery systems to bring drinks directly to customers’ front doors.</p>
                        <div className="readMoreBtn">
                            Read More
                        </div>
                    </div>
                    <div className="mapArea">
                        <div className="mapContainer">
                            <img src="https://media.npr.org/assets/img/2013/03/06/bluemarble3k-smaller-nasa_custom-644f0b7082d6d0f6814a9e82908569c07ea55ccb-s800-c85.jpg" alt="map" />
                        </div>
                    </div>
                        
                </section>
            </div>
        );
    }
}