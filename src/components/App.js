import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
    // Define and initialize a state.
    state = {
        fishes: {},
        order: {}
    };

    // Set a property to add a fish.
    addFish = (fish) => {
        // Take a copy of the existing state.
        const fishes = { ...this.state.fishes };

        // Add a new fish.
        fishes[`fish${Date.now()}`] = fish;

        // Update the state with a new fish.
        this.setState({ fishes });
    };

    // Set a property to load sample fishes.
    loadSampleFishes = () => {
        // Update the state with sample fishes.
        this.setState({ fishes: sampleFishes });
    };

    addToOrder = (key) => {
        // Take a copy of the existing state.
        const order = { ...this.state.order };

        // Add a fish to the order if not exist, else update its quantity.
        order[key] = order[key] + 1 || 1;

        // Update the state with updated order.
        this.setState({ order });
    };

    render() {
        return (
            <div className='catch-of-the-day'>
                <div className='menu'>
                    <Header tagline="Fresh Seafood Market" />

                    <ul className='fishes'>
                        {Object.keys(this.state.fishes).map((key) => (
                            <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />
                        ))}
                    </ul>
                </div>

                <Order fishes={this.state.fishes} order={this.state.order} />

                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
            </div>
        );
    }
}

export default App;
