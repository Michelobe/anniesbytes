import React, {Component} from 'react';

export default class Footer extends Component{
    constructor(){
        super();
        this.state={};
    }

    render(){
        return(
            <div className="marginContainer">
                <section id="footContainer">
                    <div className="companyInfoContainer">
                        <div className="contact">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Contact</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><a href="tel(503)555-1985" target="_blank">(503)867-5309</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="mailto:support@anniesbytes.com" target="_blank">Annie@anniesbytes.com</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="visitUs">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Visit Us</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <a href="https://goo.gl/maps/VFAR8caTkSoKssdH7" target="_blank">1219 SW Park Ave, Portland, OR 97205</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="hours">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Hours</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Monday: 11am - 9pm</td>
                                    </tr>
                                    <tr>
                                        <td>Tuesday: 11am - 9pm</td>
                                    </tr>
                                    <tr>
                                        <td>Wednesday: 11am - 9pm</td>
                                    </tr>
                                    <tr>
                                        <td>Thursday: 11am - 9pm</td>
                                    </tr>
                                    <tr>
                                        <td>Friday: 11am - 9pm</td>
                                    </tr>
                                    <tr>
                                        <td>Saturday: 11am - 9pm</td>
                                    </tr>
                                    <tr>
                                        <td>Sunday: Closed</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="signOff">
                        <div className="devName">
                            <h3><i className="far fa-copyright"></i>Michael De La Riva</h3>
                        </div>
                        <div className="social">
                            <a href="#">
                                <i className="fab fa-instagram"></i>
                                </a>
                            <a href="#">
                                <i className="fab fa-facebook-square"></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-twitter-square"></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-yelp"></i>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}