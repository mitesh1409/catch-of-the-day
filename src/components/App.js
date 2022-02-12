import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import rebase from '../base';

class App extends React.Component {
    // Define and initialize a state.
    state = {
        fishes: {},
        order: {}
    };

    constructor() {
        super();
    }

    componentDidMount() {
        const params = this.props.match.params;

        // First reinstate our local storage. Set order state from the local storage.
        const localStorageRef = localStorage.getItem(params.storeId);
        if (localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef) });
        }

        this.ref = rebase.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }

    componentDidUpdate() {
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    }

    componentWillUnmount() {
        rebase.removeBinding(this.ref);
    }

    // Set a property to add a fish.
    addFish = (fish) => {
        // Take a copy of the existing state.
        const fishes = { ...this.state.fishes };

        // Add a new fish.
        fishes[`fish${Date.now()}`] = fish;

        // Update the state with a new fish.
        this.setState({ fishes });
    };

    // Set a property to update a fish.
    updateFish = (key, updatedFish) => {
        // Take a copy of the existing state.
        const fishes = { ...this.state.fishes };

        // Update that fish.
        fishes[key] = updatedFish;

        // Finally update the state.
        this.setState({ fishes });
    }

    // Set a property to delete a fish.
    deleteFish = (key) => {
        // Take a copy of the existing state.
        const fishes = { ...this.state.fishes };

        // Set the fish to null, to delete it from Firebase as well.
        fishes[key] = null;

        // Finally update the state.
        this.setState({ fishes });
    }

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

                <Inventory
                    addFish={this.addFish}
                    updateFish={this.updateFish}
                    deleteFish={this.deleteFish}
                    loadSampleFishes={this.loadSampleFishes}
                    fishes={this.state.fishes}
                />
            </div>
        );
    }
}

export default App;
