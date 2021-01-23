import React, {Component} from 'react';

export default class JumboScreen extends Component {
    constructor(){
        super();
        this.state={};
    }
    render() {
        return(
            <div className="marginContainer">
                <section className="jumboScreen">
                    <div className="jumboImg">
                        <img src="https://media.istockphoto.com/photos/close-up-view-on-tasty-grilled-meat-with-vegetables-on-georgian-pita-picture-id1169521526?k=6&m=1169521526&s=612x612&w=0&h=q7LF21jGpMQd0aBP7WjtVfrE1NutdEXUJpYWN4gZWjo=" alt="Tasty Grilled Meat" center no-repeat />
                    </div>
                    <div className="jumboInfo">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/Meniuu_Logo.png" alt="Annie logo" center no-repeat />
                    </div>
                </section>
            </div>
        )
    }
}