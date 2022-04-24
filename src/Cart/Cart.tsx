import React from 'react'

import CartItem from '../CartItem/CartItem'

import { Wrapper } from './Cart.style'

import { CartItemType } from '../App'
import Item from '../Items/Item'

type Props = {
    cartItems: CartItemType[];
    addToCart : (clickedItem : CartItemType) => void;
    removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart}) =>{
    const total = (items: CartItemType[]) =>
        items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
    
    return (
        <Wrapper>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? <p>No item in Your Cart</p> : null}
            {cartItems.map(Item =>(
                <CartItem
                    key={Item.id}
                    item={Item}
                    addToCart = {addToCart}
                    removeFromCart = {removeFromCart}
                />
            ))}
            <h2>Total : $ {total(cartItems).toFixed(2)}</h2>
        </Wrapper>
    )
}

export default Cart;