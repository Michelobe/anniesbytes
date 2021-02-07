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
import CartHeader from "./includes/cartHeader.js";
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
                    <div className="blackContainer">
                        <Footer />
                    </div>
                </Route>
                <Route exact path="/:order">
                    <CartHeader />
                    <OrderJumbo />
                    <Pickup />
                </Route>
            </div>
        </Router>
    );
  }
}

export default App;
