import React, {Component} from 'react';

export default class Menu extends Component{
    constructor(){
        super();
        this.state={};
    }

    render(){
        return(
        <div className={`marginContainer`}>
            <div className={`menuSection`}>
                <div className={`menuHeader`}>
                    <h3>Specials</h3>
                </div>
                <div className={`menuOptionsContainer`}>
                    <div className={`menuOptions`}>
                        <div className={`optionsInfo`}>
                            <h1 className={`optionsHeader`}>Kupati Georgian Sausage</h1>
                            <p className={`foodInfo`}>Kupati is a Georgian sausage made with ground pork and beef, Georgian spices and onions.</p>
                            <p className={`foodPrice`}>$24.00</p>
                        </div>
                        <div className={`optionsPic`}>
                            <img src={`https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Hamburger.jpg`} alt={`hamburger`} />
                        </div>
                    </div>
                    <div className={`menuOptions`}>
                        <div className={`optionsInfo`}>
                            <h1 className={`optionsHeader`}>Kupati Georgian Sausage</h1>
                            <p className={`foodInfo`}>Kupati is a Georgian sausage made with ground pork and beef, Georgian spices and onions.</p>
                            <p className={`foodPrice`}>$24.00</p>
                        </div>
                        <div className={`optionsPic`}>
                            <img src={`https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Hamburger.jpg`} alt={`hamburger`} />
                        </div>
                    </div>
                    <div className={`menuOptions`}>
                        <div className={`optionsInfo`}>
                            <h1 className={`optionsHeader`}>Kupati Georgian Sausage</h1>
                            <p className={`foodInfo`}>Kupati is a Georgian sausage made with ground pork and beef, Georgian spices and onions.</p>
                            <p className={`foodPrice`}>$24.00</p>
                        </div>
                        <div className={`optionsPic`}>
                            <img src={`https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Hamburger.jpg`} alt={`hamburger`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}