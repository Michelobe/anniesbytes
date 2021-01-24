import React, { Component } from 'react';
import Header from "./includes/header.js";
import JumboScreen from "./components/jumboScreen.js";
import Cuisine from "./components/cuisineDisplay.js";
import Portrayal from "./components/portrayal.js";
import Map from "./components/mapSection.js";

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
            <div className="portrayalContainer">
                <Portrayal />
            </div>
            <div className="whiteContainer">
                <Map />
            </div>
        </div>
    );
  }
}

export default App;
