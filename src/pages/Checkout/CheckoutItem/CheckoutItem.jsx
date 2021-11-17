import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

const CheckoutItem = ({
  id,
  image,
  name,
  price,
  color,
  brand,
  qty,
}) => {
  const classes = useStyles();
  const sumPrice = price * qty;

  return (
    <Card key={id} className={classes.cartItem}>
      <Grid container>
        <Grid item xs={5} sm={5} md={5}>
          <CardMedia
            className={classes.cartMediaWrapper}
            image={image}
            title={name}
          />
        </Grid>
        <Grid item xs={7} sm={7} md={7}>
          <CardContent className={classes.сartContent}>
            <Typography
              className={classes.cartTitle}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {brand} {name} {color}
            </Typography>
            <Typography
              variant="h6"
              color="textPrimary"
              component="p"
              className={classes.cartId}
            >
              Код товара: {id}
            </Typography>

            <Box display="flex" justifyContent="space-around">
              <Typography
                variant="h6"
                color="textPrimary"
                component="p"
                className={classes.cartPrice}
              >
                {price} ₴
              </Typography>
              <Typography
                variant="h6"
                color="textPrimary"
                component="p"
                className={classes.cartPrice}
              >
                {qty} шт.
              </Typography>
              <Typography
                variant="h6"
                color="textPrimary"
                component="p"
                className={classes.cartPrice}
              >
                {sumPrice} ₴
              </Typography>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CheckoutItem;
