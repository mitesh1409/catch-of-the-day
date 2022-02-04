import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';

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

    render() {
        return (
            <div className='catch-of-the-day'>
                <div className='menu'>
                    <Header tagline="Fresh Seafood Market" />
                </div>

                <Order />

                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
            </div>
        );
    }
}

export default App;
