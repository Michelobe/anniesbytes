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
                            <div className="mapouter">
                                <div className="gmap_canvas">
                                    <iframe width="504" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=1219%20SW%20Park%20Ave,%20Portland,%20OR%2097205&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                                    <a href="https://www.whatismyip-address.com"></a>
                                    <br />
                                    <style>.mapouter{["position:relative","textAlign:right","height:500px","width:504px"]}</style>
                                    <a href="https://www.embedgooglemap.net"></a>
                                    <style>.gmap_canvas {["overflow:hidden","background:none!important","height:500px","width:504px"]}</style>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                </section>
            </div>
        );
    }
}