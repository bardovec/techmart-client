import React, {useState} from 'react';
import {Paper} from '@material-ui/core';

import ProductTabs from './Tabs';
import Reviews from './Reviews';

import useStyles from './styles';
import ProductDescription from './ProductDescription';
import ProductSpecifications from './ProductSpecifications';
import Box from '@mui/material/Box';

const ProductDetailsTabs = () => {
    const classes = useStyles();

    const [description, setDescription] = useState(true);
    const [specifications, setSpecifications] = useState(false);
    const [reviews, setReviews] = useState(false);

    return (
        <Paper className={classes.productDetailsWrapper}>
            <ProductTabs setDescription={setDescription} setSpecifications={setSpecifications}
                         setReviews={setReviews}/>
            <Box className={classes.descriptions}>
                {description && <Box><ProductDescription/></Box>}
                {specifications && <Box><ProductSpecifications/></Box>}
                {reviews && <Box><Reviews/></Box>}
            </Box>
        </Paper>
    );
};
export default ProductDetailsTabs;
