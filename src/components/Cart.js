import React, { Component } from 'react'

export class Cart extends Component {
    render() {
        const { cartItems } = this.props;
        return (
            <div>
                {cartItems.length === 0 ?
                    <div>
                        Cart is empty
                    </div>
                    :
                    <div>
                        You have {cartItems.length} in the cart {""}
                    </div>
                }
                <div>
                    <div>
                        <ul>
                            {cartItems.map(item => (
                                <li key={cartItems.id}>
                                    <div>
                                        <img src={item.img} alt={item.title}></img>
                                    </div>
                                    <div>
                                        <div>{item.title}</div>
                                    </div>
                                    {item.price} x {item.count}
                                    <button onClick={() => this.props.removeFromCart(item)}>
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        Total:{''}
                        {cartItems.reduce(
                            (a, c) => a + c.price * c.count, 0
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart
