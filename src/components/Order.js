import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Order extends React.Component {
    static propTypes = {
        fishes: PropTypes.object,
        order: PropTypes.object,
        deleteFromOrder: PropTypes.func
    };

    renderOrderItem = (key) => {
        const fish = this.props.fishes[key];

        // Make sure the fish is loaded before we continue.
        if (!fish) {
            return null;
        }

        const cssTransitionOptions = {
            classNames: 'order',
            key: key,
            timeout: { enter: 500, exit: 500 }
        };

        if (fish.status !== 'available') {
            return (
                <CSSTransition {...cssTransitionOptions}>
                    <li key={key}>
                        Sorry, {fish.name} is no longer available!
                    </li>
                </CSSTransition>
            );
        }

        const count = this.props.order[key];

        return (
            <CSSTransition {...cssTransitionOptions}>
                <li key={key}>
                    <span>
                        <TransitionGroup component='span' className='count'>
                            <CSSTransition classNames='count' key={count} timeout={{ enter: 500, exit: 500 }}>
                                <span>{count}</span>
                            </CSSTransition>
                        </TransitionGroup>
                        lbs {fish.name} {formatPrice(count * fish.price)}
                        <button onClick={() => this.props.deleteFromOrder(key)}>
                            &times;
                        </button>
                    </span>
                </li>
            </CSSTransition>
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

                <TransitionGroup component='ul' className='order'>
                    { orderIds.map(this.renderOrderItem) }
                </TransitionGroup>

                <div className='total'>
                    Total:
                    <strong>{formatPrice(orderTotal)}</strong>
                </div>
            </div>
        );
    }
}

export default Order;
