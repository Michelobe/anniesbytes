import React, { Component } from 'react';
import Header from "./includes/header.js";
import JumboScreen from "./components/jumboScreen.js";
import Cuisine from "./components/cuisineDisplay.js";
import Portrayal from "./components/portrayal.js";
import Map from "./components/mapSection.js";
import Beer from "./components/beerSection.js";
import Reviews from "./components/reviewSection.js";
import TakeIt from "./components/takeItHome.js";

class App extends Component {
	constructor() {
		super();
		this.state = {};
    }
  render() {
    return (
        <div>
            <div className="blackContainer">
                <Header />
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
        </div>
    );
  }
}

export default App;
