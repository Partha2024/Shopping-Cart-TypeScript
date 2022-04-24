import React, { useState } from 'react';
import {useQuery} from 'react-query';
// components 
import { Container, GridJustification, Button, Typography, Card, CardContent, CardActions, CardActionArea, Drawer, LinearProgress, Grid, Badge} from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import {makeStyles} from '@material-ui/core/styles'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Item from './Items/Item';
import Cart from './Cart/Cart'
// styles
import { Wrapper, StyledButton } from './App.style';
//types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};



const getProducts = async(): Promise<CartItemType[]> => await(await fetch("https://fakestoreapi.com/products")).json();

  
export default function App() {

  const [cartOpen, setCartOpen] = useState(false);
  const[cartItems, setCartItems] = useState([] as CartItemType[]);
  const{data, isLoading, error} = useQuery<CartItemType[]>("products", getProducts)
  console.log(data)

  const getTotalItem = (items: CartItemType[]) => {
    return items.reduce((ack: number, item) => ack + item.amount, 0);
  };

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(Item => Item.id === clickedItem.id)

      if(isItemInCart){
        return prev.map(item => (
          item.id === clickedItem.id ? {...item, amount: item.amount+1}
          :item
        ))
      }
      return [...prev, {...clickedItem, amount: 1}];
    })
  };
  
  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev =>
      prev.reduce((ack, item) => {
        if(item.id === id){
          if(item.amount === 1){
            return ack;
          } 
          return [...ack, {...item, amount: item.amount-1}];
        }else{
          return[...ack, item]
        }
      }, [] as CartItemType[])
    )
  };

  if(isLoading) return <LinearProgress/>;
  if(error) return <div>Oops..! 404</div>

  return (
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={()=>setCartOpen(false)}>
        <Cart cartItems={cartItems} addToCart = {handleAddToCart} removeFromCart = {handleRemoveFromCart}> 

        </Cart>
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItem(cartItems)} color = "error">
          <AddShoppingCartIcon/>
        </Badge>
      </StyledButton>
      <Grid container spacing={3}> 
        {data?.map((item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart}/>
          </Grid>
        )))}
      </Grid>
    </Wrapper>
  );
}


