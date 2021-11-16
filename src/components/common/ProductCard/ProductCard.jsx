import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import { useActions } from "../../../hooks/useActions";

const ProductCard = ({
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
    const { addToCart } = useActions();

    return (
        <Card key={id} className={classes.cardWrapper}>
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
                            variant='h5'
                            component='h2'
                        >
                            {name}
                        </Typography>
                        <Typography
                            variant='body2'
                            color='textSecondary'
                            component='p'
                            className={classes.cardExtraOptions}
                        >
                            Бренд: {brand}
                        </Typography>
                        <Typography
                            variant='body2'
                            color='textSecondary'
                            component='p'
                            className={classes.cardExtraOptions}
                        >
                            Категория: {category}
                        </Typography>
                        <Typography
                            variant='body2'
                            color='textSecondary'
                            component='p'
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
                            Наличие: {quantity === 0 ? "Нет в наличии" : quantity}
                        </Typography>
                        <Typography
                            variant='h6'
                            color='textPrimary'
                            component='p'
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
                    Добавить в корзину
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
