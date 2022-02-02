import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    constructor() {
        super();
        this.goToStore = this.goToStore.bind(this);
    }

    storeNameInput = React.createRef();

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>

                <input
                    type="text"
                    ref={this.storeNameInput}
                    required
                    placeholder="Store Name"
                    defaultValue={getFunName()}
                />

                <button type='submit'>Visit Store →</button>
            </form>
        );
    }

    goToStore(event) {
        console.log('goToStore', this);
        // Stop the form from reloading the page on submit.
        event.preventDefault();

        // Get the store name from input.

        // Go to the store page - store/store-name
    }
}

export default StorePicker;
