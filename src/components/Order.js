import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {
    renderOrderItem = (key) => {
        const fish = this.props.fishes[key];

        // Make sure the fish is loaded before we continue.
        if (!fish) {
            return null;
        }

        if (fish.status !== 'available') {
            return (
                <li key={key}>
                    Sorry, {fish.name} is no longer available!
                </li>
            );
        }

        const count = this.props.order[key];

        return (
            <li key={key}>
                {count} lbs {fish.name} {formatPrice(count * fish.price)}
            </li>
        );
    };

    render() {
        const orderIds = Object.keys(this.props.order);
        const orderTotal = orderIds.reduce((total, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === 'available';
            return isAvailable ? total + (count * fish.price) : total;
        }, 0);

        return (
            <div className='order-wrap'>
                <h2>Order</h2>

                <ul className='order'>
                    { orderIds.map(this.renderOrderItem) }
                </ul>

                <div className='total'>
                    Total:<strong>{formatPrice(orderTotal)}</strong>
                </div>
            </div>
        );
    }
}

export default Order;
