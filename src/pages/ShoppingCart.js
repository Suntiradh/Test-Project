import React, { Component } from 'react'
import Cart from '../components/Cart';
import Product from '../components/Product';

export class ShoppingCart extends Component {
    state ={
        cartItems: []
      }

    removeFromCart =(product) => {
        const cartItems = this.state.cartItems.slice();
        this.setState({
          cartItems:cartItems.filter(x => x.id !== product.id)
        });
      }
    
      addToCart =(product) => {
        const cartItems = this.state.cartItems.slice();
        let alreadyInCart = false;
        cartItems.forEach(item =>{
          if(item.id === product.id) {
            item.count++;
            alreadyInCart = true;
          }
        });
        if(!alreadyInCart) {
          cartItems.push({...product, count:1});
        }
        this.setState({cartItems});
      };
    render() {
        return (
            <div>
                 <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart}/>
            </div>
        )
    }
}

export default ShoppingCart
