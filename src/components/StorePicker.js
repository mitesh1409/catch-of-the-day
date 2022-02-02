import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    render() {
        return (
            <form className="store-selector">
                <h2>Please Enter A Store</h2>

                <button onClick={this.handleClick}>Click Me!</button>

                <input
                    type="text"
                    required
                    placeholder="Store Name"
                    defaultValue={getFunName()}
                />

                <button type='submit'>Visit Store →</button>
            </form>
        );
    }

    handleClick() {
        alert('Heyyyyy!');
    }
}

export default StorePicker;
