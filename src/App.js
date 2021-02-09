import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
// =============== MAIN PAGE ================
import MainHeader from "./includes/mainHeader.js";
import JumboScreen from "./components/mainPage/jumboScreen.js";
import Cuisine from "./components/mainPage/cuisineDisplay.js";
import Portrayal from "./components/mainPage/portrayal.js";
import Map from "./components/mainPage/mapSection.js";
import Beer from "./components/mainPage/beerSection.js";
import Reviews from "./components/mainPage/reviewSection.js";
import TakeIt from "./components/mainPage/takeItHome.js";
// =============== PICKUP/TAKEOUT ================
import OrderJumbo from "./components/deliveryTakeout/orderJumbo.js";
import Pickup from "./components/deliveryTakeout/pickupOptions.js";
// =============== FOOTER ================
import Footer from "./includes/footer.js";

class App extends Component {
	constructor() {
		super();
		this.state = {};
    }
  render() {
    return (
        <Router>
            <div>
                {/* =================THE MAIN PAGE=================== */}
                <Route exact path="/">
                    <div className="blackContainer">
                        <MainHeader />
                        <JumboScreen />
                    </div>
                    <div className="whiteContainer">
                        <Cuisine />
                    </div>
                    <Portrayal />
                    <div className="whiteContainer">
                        <Map />
                        <Beer />
                    </div>
                    <div className="blackContainer">
                        <Reviews />
                    </div>
                    <TakeIt />
                </Route>
                {/* =================THE TAKEOUT/DELIVERY PAGE=================== */}
                <Route exact path="/:order">
                    <div className="blackContainer">
                        <MainHeader />
                    </div>
                    <OrderJumbo />
                    <Pickup />
                </Route>
                {/* ================= FOOTER(SHOWS ON EVERY PAGE) =================== */}
                <div className="blackContainer">
                    <Footer />
                </div>
            </div>
        </Router>
    );
  }
}

export default App;
