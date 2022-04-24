import React from 'react'
import { Button } from "@material-ui/core";

import { CartItemType } from "../App";

import { Wrapper } from "./Item.style";

type Props = {
    item: CartItemType,
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({item, handleAddToCart}) => (
    <Wrapper>
        <div className='imageDiv'>
            <img src={item.image} alt = {item.title}/>
        </div>
        <div className='infoDiv'>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
        </div>
        <div className='priceDiv'>
            <h5>Price : {item.price} $</h5>
        </div>
        <Button onClick={()=> handleAddToCart(item)}>Add To Cart</Button>
    </Wrapper>
);

export default Item;