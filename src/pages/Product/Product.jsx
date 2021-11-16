import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Grid,
  Typography,
  Container,
  IconButton,
  Button,
  Box,
} from '@material-ui/core';
import useStyles from './styles';
import Slider from '../../components/common/Slider/Slider';
import GarantyIcon from '../../components/icons/GarantyIcon';
import CheckCircleIcon from '../../components/icons/CheckCircleIcon';
import { useActions } from '../../hooks/useActions';
import ProductDetailsTabs from "../../components/common/ProductDetailsTabs";

const mockId = '684124';
const phone = {
  memory: [64, 128, 256],
};

const Product = () => {
  const classes = useStyles();
  const { addToCart } = useActions();
  const { listProductDetails } = useActions();
  const { listProductColors } = useActions();

  const product = useSelector(state => state.productDetails.product);
  const productColors = useSelector(state => state.productDetails.productColors);
  const phoneColorArr = productColors.map((prod) => prod.color);

  const changeProduct = (color) => {
    const choseProduct = productColors.find((prod) => prod.color === color);
    listProductDetails(choseProduct.itemNo);
  };
  const addToCartHandler = (mockId) => {
    addToCart(mockId);
  };
  useEffect(() => {
    listProductDetails(mockId);
    listProductColors(product.name);
  }, [mockId]);
  return (
    <Container maxWidth='lg'>
      <Box className={classes.cardWrapper}>
        <Typography variant='h5' className={classes.header}>
          {product.brand}
          {product.name}
          {product.color}
        </Typography>

        <Grid
          container
          justifyContent='space-evenly'
          alignItems='stretch'
          spacing={2}
        >
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            className={(classes.mainSlider, classes.item)}
          >
            <Slider images={product.imageUrls} />
          </Grid>

          <Grid item xs={12} sm={4} md={3} className={classes.item}>
            <Typography variant='body1' className={classes.container}>
              Цвет:
            </Typography>
            <Grid container spacing={2} className={classes.container}>
              {phoneColorArr.map((color, index) => (
                <IconButton
                  onClick={() => changeProduct(color)}
                  key={index}
                  variant='outlined'
                  className={classes.coloredBtn}
                  style={{ backgroundColor: color }}
                />
              )) }
            </Grid>
            <Typography variant='body1' className={classes.text}>
              Код товара:
              {product.itemNo}
            </Typography>
            <Typography variant='h4' className={classes.price}>
              {product.currentPrice} грн
            </Typography>
            <Button className={classes.productButton} id='buyBtn' onClick={() => addToCartHandler(mockId)}>
              Купить
            </Button>
          </Grid>

          <Grid item xs={12} sm={12} md={3} className={classes.item}>
            <Typography variant='body1' className={classes.container}>
              Память:
            </Typography>
            <Grid container spacing={2} className={classes.container}>
              {phone.memory.map((memory, index) => (
                <Button
                  key={index}
                  variant='outlined'
                  className={classes.memoryButton}
                >
                  {memory} Gb
                </Button>
              ))}
            </Grid>
            <Grid container spacing={3} className={classes.text}>
              <GarantyIcon />
              <Typography variant='body1' className={classes.garanty}>
                Гарантия 3 мес.
              </Typography>
            </Grid>
              {product.enabled ? 
                <Grid container spacing={3} className={classes.text}>
                  <CheckCircleIcon />
                  <Typography variant='body1' className={classes.exist}>
                    Есть в наличии
                  </Typography>
                </Grid>
                :
                <Grid container spacing={3} className={classes.text}>
                  <Typography variant='body1' className={classes.noExist}>
                    Нет в наличии
                  </Typography>
                </Grid>}
            <Button
              valiant='outlined'
              className={classes.productButton}
              id='btnBuyInCredit'
              onClick={() => addToCartHandler(mockId)}
            >
              Купить в кредит
            </Button>
          </Grid>
        </Grid>
      </Box>
      <ProductDetailsTabs/>
    </Container>
  );
};
export default Product;
