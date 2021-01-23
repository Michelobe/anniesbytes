import React, { Component } from 'react';
import Header from "./includes/header.js";
import JumboScreen from "./components/jumboScreen.js";

class App extends Component {
	constructor() {
		super();
		this.state = {};
    }
  render() {
    return (
        <div className="outerContainer">
            <Header />
            <JumboScreen />
        </div>
    );
  }
}

export default App;
