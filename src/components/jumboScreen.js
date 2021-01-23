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
                    <div className="jumboLeft">
                        <div className="jumboImg">
                        </div>
                    </div>
                    <div className="jumboInfo">
                        <div className="jumboInfoImg">
                        </div>
                        <h1>Pacific North West Fine Dining experience</h1>
                        <p>Spicy jalapeno bacon ipsum dolor amet laborum pork nulla dolore sunt short ribs. In swine consequat biltong nostrud id. Mollit aute nisi, capicola meatball magna esse.</p>
                        <p>Meatball picanha occaecat, ullamco rump anim cupim ham hock spare ribs turkey labore nisi sint elit in. Sed bresaola quis rump.</p>
                        <div className="menuBtn">
                            Menu
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}