import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

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

        // Update the state.
        this.setState({ fishes });
    };

    render() {
        return (
            <div className='catch-of-the-day'>
                <div className='menu'>
                    <Header tagline="Fresh Seafood Market" />
                </div>

                <Order />

                <Inventory addFish={this.addFish} />
            </div>
        );
    }
}

export default App;
