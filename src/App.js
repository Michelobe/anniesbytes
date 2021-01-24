import React, { Component } from 'react';
import Header from "./includes/header.js";
import JumboScreen from "./components/jumboScreen.js";
import Cuisine from "./components/cuisineDisplay.js";
import Portrayal from "./components/portrayal.js";

class App extends Component {
	constructor() {
		super();
		this.state = {};
    }
  render() {
    return (
        <div>
            <div className="outerContainer">
                <Header />
                <JumboScreen />
            </div>
            <div className="cuisineContainer">
                <Cuisine />
            </div>
            <div className="portrayalContainer">
                <Portrayal />
            </div>
        </div>
    );
  }
}

export default App;
