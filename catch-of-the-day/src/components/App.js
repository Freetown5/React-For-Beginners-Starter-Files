import React from "react";
import PropTypes from "prop-types";
import MenuItems from './MenuItems';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import base from '../base';

class App extends React.Component {
    state = {
        fishes:{},
        order: {}
    };

    static propTypes = {
        match: PropTypes.object
    }

    componentDidMount = () => {
        const { params } = this.props.match;
        // first reinstate out localStorage
        // console.log(localStorage);
        const localStorageRef = localStorage.getItem(params.storeId);
        
        if(localStorageRef){
            this.setState({ order: JSON.parse(localStorageRef)})
        }
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }; 

    componentDidUpdate = () => {
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
        console.log(this.state.order);
    }
    
    // componentWillUpdate(){
    //     base.removeBinding(this.ref);
    // }

    addFish = (fish) => {
        // 1. Take a copy of the existing state
        const fishes = { ...this.state.fishes};
        // 2. Add our new fish to that fishes variable
        fishes[`fish${Date.now()}`] = fish;
        //3. Set the new fishes object to state
        this.setState({fishes});
    };

    updateFish = (key, updatedFish) => {
        //1. Take a copy of the current state
        const fishes = {...this.state.fishes};
        //2. Update state
        fishes[key] = updatedFish;
        //3. Set that to state
        this.setState({ fishes });
    }

    deleteFish = (key) => {
        //1. take a copy of state
        const fishes = {...this.state.fishes };
        //2. update the state
        fishes[key] = null;
        //3. update state
        this.setState({ fishes });
    }

    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes });
    };

    addToOrder = (key) => {
        //1. take a copy of state
        const order = {...this.state.order};
        //2. add to or update order
        order[key] = order[key] + 1 || 1;
        //3. Call set state to update state
        this.setState({order});
    }

    removeFromOrder = key => {
        //1. take a copy of state
        const order = {...this.state.order};
        //2. remove that item from order
        delete order[key];
        //3. Call set state to update state
        this.setState({order});
    }
    render(){
        return(
            <div className="catch-of-the-day">
                <MenuItems 
                    fishes={this.state.fishes} 
                    addToOrder={this.addToOrder}
                />
                <Order 
                    fishes={this.state.fishes} 
                    order={this.state.order}
                    removeFromOrder={this.removeFromOrder}   
                />
                {/* or
                <Order fishes={...this.state} /> //automatically passes down all data in state */}
                <Inventory 
                    addFish={this.addFish}
                    updateFish={this.updateFish}
                    deleteFish={this.deleteFish} 
                    loadSampleFishes={this.loadSampleFishes} 
                    fishes={this.state.fishes} 
                    storeId={this.props.match.params.storeId}
                />
            </div>
        )
    }
}

export default App;