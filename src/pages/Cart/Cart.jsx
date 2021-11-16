import React from "react";
import { useSelector } from "react-redux";
import { useStyles } from "./styles";
import CartItem from "./CartItem";
import { Button, Typography, Grid } from "@material-ui/core";

const Cart = () => {
  const classes = useStyles();
  const cartItem = useSelector((state) => state.cart.cartItems);
  if (cartItem.length === 0) {
    return (
      <>
        <Typography
          variant="h4"
          color="textPrimary"
          component="p"
          className={classes.cartTitle}
        >
          Корзина пуста
        </Typography>
      </>
    );
  }
  const tottalPrice = cartItem.reduce((previous, current) => {
    return previous + current.price * current.qty;
  }, 0);
  const cartList = cartItem.map((item) => (
    <CartItem
      key={item.product}
      id={item.product}
      image={item.image}
      name={item.name}
      color={item.color}
      brand={item.brand}
      price={item.price}
      countInStock={item.countInStock}
      qty={item.qty}
    />
  ));

  return (
    <>
      <Typography
        variant="h4"
        color="textPrimary"
        component="p"
        className={classes.cartTitle}
      >
        Корзина
      </Typography>
      <Grid container className={classes.cartItems}>
        <Grid item xs={12} sm={12} md={8}>
          {cartList}
        </Grid>
        <Grid item xs={12} sm={12} md={4} className={classes.cartButton}>
          <Typography
            variant="h6"
            color="textPrimary"
            component="p"
            className={classes.cardPrice}
          >
            Итого : {tottalPrice} ₴
          </Typography>
          <Button className={classes.btnChekout} variant="contained">
            Оформить заказ
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Cart;
