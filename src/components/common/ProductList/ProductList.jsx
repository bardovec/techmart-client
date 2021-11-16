import React from 'react';
import { useActions } from '../../../hooks/useActions';
import ProductCard from '../ProductCard/ProductCard';
import { useStyles } from './styles';
import { Box } from "@material-ui/core";

const ProductList = ({ products }) => {
    const { addToCart } = useActions();
    const classes = useStyles();

    const addToCartHandler = (productId) => {
        addToCart(productId);
    };

    const productsMapped = products.map((product) => (
        <ProductCard
            key={product._id}
            id={product.itemNo}
            name={product.name}
            image={product.imageUrls[0]}
            price={product.currentPrice}
            color={product.color}
            brand={product.brand}
            category={product.category}
            quantity={product.quantity}
            addToCartHandler={() => addToCartHandler(product._id)}
        />
    ));

    return (
        <Box className={classes.listWrapper}>{productsMapped}</Box>
    );
};

export default ProductList;
