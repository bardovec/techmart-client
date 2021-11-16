import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  useMediaQuery,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";
import { useActions } from "../../../hooks/useActions";

const CartItem = ({
  id,
  image,
  name,
  price,
  color,
  brand,
  countInStock,
  qty,
}) => {
  const classes = useStyles();
  const sumPrice = price * qty;
  const isSm = useMediaQuery("(min-width: 600px)");
  const isMd = useMediaQuery("(min-width: 960px)");
  const { addToCartItemQty, removeFromCartItemQty, removeFromCart } =
    useActions();

  return (
    <Card key={id} className={classes.cartItem}>
      <Grid container spacing={2}>
        <Grid item xs={4} sm={2} md={2}>
          <CardMedia
            className={classes.cartMediaWrapper}
            image={image}
            title={name}
          />
        </Grid>
        <Grid item xs={8} sm={6} md={5}>
          <CardContent className={classes.сartContent}>
            <Typography
              className={classes.cartTitle}
              gutterBottom
              variant="h5"
              component="h2"
              style={isSm ? { fontSize: "18px" } : null}
            >
              {brand} {name} {color}
            </Typography>
            <Typography
              variant="h6"
              color="textPrimary"
              component="p"
              className={classes.cartId}
              style={isSm ? { fontSize: "15px" } : null}
            >
              Код товара: {id}
            </Typography>
            <Typography
              variant="h6"
              color="textPrimary"
              component="p"
              className={classes.cartPrice}
              style={isSm ? { fontSize: "18px" } : null}
            >
              {price} ₴
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} sm={4} md={2} className={classes.cartQty}>
          <CardActions>
            <Button
              className={classes.cartButton}
              variant="outlined"
              color="primary"
              onClick={() => removeFromCartItemQty(id)}
            >
              -
            </Button>
            <span>{qty}</span>
            <Button
              className={classes.cartButton}
              variant="outlined"
              color="primary"
              onClick={() => addToCartItemQty(id)}
            >
              +
            </Button>
            {qty === countInStock ? (
              <span className={classes.maxQty}>Макс {countInStock} шт.</span>
            ) : null}
          </CardActions>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          className={classes.cartActionTotalDel}
          style={
            isMd
              ? {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                }
              : null
          }
        >
          <Button
            className={classes.cartButtonDel}
            variant="text"
            color="primary"
            onClick={() => removeFromCart(id)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 6H5H21"
                stroke="#222222"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
                stroke="#222222"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 11V17"
                stroke="#222222"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 11V17"
                stroke="#222222"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <Typography
            variant="h6"
            color="textPrimary"
            component="p"
            className={classes.cartTotalPrice}
          >
            {sumPrice} ₴
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CartItem;
