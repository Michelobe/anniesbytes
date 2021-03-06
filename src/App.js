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
import OrderOptions from "./components/deliveryTakeout/orderOptions.js";
// ================== MENU ====================
import Menu from "./components/menu/menu.js";
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
                {/* ================= HEADER(SHOWS ON EVERY PAGE) =================== */}
                <div className="blackContainer">
                    <MainHeader />
                </div>
                {/* =================THE MAIN PAGE=================== */}
                <Route exact path='/'>
                    <div className="blackContainer">
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
                <Route exact path='/order'>
                    <OrderJumbo />
                    <OrderOptions />
                </Route>
                {/* ================== MENU ==================== */}
                <Route exact path='/menu'>
                    <OrderJumbo />
                    <Menu />
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
