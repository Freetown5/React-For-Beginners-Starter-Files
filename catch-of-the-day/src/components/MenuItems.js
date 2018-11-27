import React from 'react';
import PropTypes from "prop-types";
import Header from './Header';
import Fish from './Fish';

class MenuItems extends React.Component {
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