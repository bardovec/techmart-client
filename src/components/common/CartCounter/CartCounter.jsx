import React from 'react';
import { useSelector } from "react-redux";
import { useStyles } from './styles';

const CartCounter = () => {
    const classes = useStyles();
    const cartItem = useSelector((state) => state.cart.cartItems);
    const cartCounter = cartItem.reduce((previous, current) => {
        return previous + current.qty;
      }, 0);
      return (
      cartItem.length > 0 ?  
        <span className={classes.cartCounter}>
        {cartCounter}
        </span>
        :null
      )
};

export default CartCounter;
