import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";
import { useStyles } from "./styles";

const ProductsItem = ({
  id,
  image,
  name,
  category,
  color,
  brand,
  price,
  quantity,
}) => {
  const classes = useStyles();
  const is771 = useMediaQuery("(max-width: 857px)");
  const is669 = useMediaQuery("(max-width: 669px)")
  const { addToCart } = useActions();

  return (
    <Card
      key={id}
      className={is771 ? classes.cardAdaptiveWrapper : classes.cardWrapper}
    >
      <Link to={`/products/${id}`} className={classes.cardLink}>
        <CardActionArea>
          <CardMedia
            className={classes.cardMediaWrapper}
            image={image}
            title={name}
          />
          <CardContent>
            <Typography
              className={classes.cardTitle}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.cardExtraOptions}
            >
              Бренд: {brand}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.cardExtraOptions}
            >
              Категория: {category}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.cardExtraOptions}
            >
              Цвет: {color}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.cardExtraOptions}
            >
              Наличие: {quantity}
            </Typography>
            <Typography
              variant="h6"
              color="textPrimary"
              component="p"
              className={classes.cardPrice}
            >
              {price} ₴
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Button
          className={classes.cardButton}
          variant="contained"
          color="primary"
          style={quantity === 0 ? { pointerEvents: "none" } : null}
          onClick={() => addToCart(id)}
        >
          {quantity === 0 ? 'Нет в наличии' : "Добавить в корзину"}
        </Button>
      </CardActions>
    </Card>
  );
};
export default ProductsItem;
