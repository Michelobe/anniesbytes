import React, {Component} from 'react';

export default class Reviews extends Component {
    constructor(){
        super();
        this.state={};
    }

    render(){
        return(
            <div className="marginContainer">
                <section id="reviewSection">
                    <h1>Reviews & Awards</h1>
                    <div className="boxContainer">
                        {/* THESE BOXES WILL BE LARGE ICONS OF COMPANIES,
                        AND WILL BE BUTTONS LEADING TO WEBSITE TO READ REVIEW */}
                        <div className="reviewCompanyBox boxOne"></div>
                        <div className="reviewCompanyBox boxTwo"></div>
                        <div className="reviewCompanyBox boxThree"></div>
                        <div className="reviewCompanyBox boxFour"></div>
                    </div>
                </section>
            </div>
        );
    }
}