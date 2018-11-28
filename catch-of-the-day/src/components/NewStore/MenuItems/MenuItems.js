import React from 'react';
import PropTypes from "prop-types";
import Header from './MenuSubComponents/Header';
import Fish from './MenuSubComponents/Fish';

class MenuItems extends React.Component {
    static propTypes = {
        fishes: PropTypes.object,
        addToOrder: PropTypes.func
    }

    render(){
        return(
            <div className="menu">
                <Header tagline="Fresh Seafood Market"/>
                
                <ul className="fishes">
                    {Object.keys(this.props.fishes).map(key => <Fish key={key} index={key} details={this.props.fishes[key]} addToOrder={this.props.addToOrder} />)}
                </ul>
            </div>
        )
    }
}

export default MenuItems;