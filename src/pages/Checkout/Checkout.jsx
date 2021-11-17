import React, { useState } from "react";
import Checkoutform from "./CheckoutForm/CheckoutForm";
import CheckoutAuth from "./CheckoutForm/CheckoutAuth/CheckoutAuth";
import {
  Container,
  Box,
  useMediaQuery,
  Typography,
  Tabs,
  Tab,
  Button,
} from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { useStyles } from "./style";
import CheckoutItem from "./CheckoutItem/CheckoutItem";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import formFieldsData from "./CheckoutForm/fieldsInitData";
import { useActions } from "../../hooks/useActions";
import { useHistory } from "react-router";

const Checkout = () => {
  const style = useStyles();

  const history = useHistory()

  const token = useSelector(state => state.userLogin.userInfo)
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { removeAllFromCart } = useActions();
  const cartItem = useSelector((state) => state.cart.cartItems);
  const tottalPrice = cartItem.reduce((previous, current) => {
    return previous + current.price * current.qty;
  }, 0);
  const checkoutList = cartItem.map((item) => (
    <CheckoutItem
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
    <Container maxWidth="xl" className={style.checkoutContainer}>
      <Box className={style.checkoutForm}>
        <Typography variant="h5" className={style.formTitle}>
          Оформление заказа
        </Typography>
        <hr align="center" width="100%" size="1" color="#EBEBEB" />
        <TabContext value={value}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              label="Я новый покупатель"
              value='1'
              className={style.anchorStyle}
            />
            <Tab
              label="Я постоянный покупатель"
              value='2'
              className={style.anchorStyle}
              onClick={() => token === null ? history.push('/signin') : null}
            />
          </TabList>

          <TabPanel value='1'>
            <Checkoutform
              formFieldsData={formFieldsData}
              removeAllFromCart={removeAllFromCart}
            />
          </TabPanel>
          <TabPanel value='2'>
            <CheckoutAuth removeAllFromCart={removeAllFromCart} />
          </TabPanel>
        </TabContext>
      </Box>
      <Box className={style.checkoutItems}>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={style.formTitle}
        >
          Ваш заказ
        </Typography>
        {checkoutList}
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={style.tottalPrice}
        >
          Итого к оплате: {tottalPrice} ₴
        </Typography>
        <Button
          className={style.btnChekout}
          variant="contained"
          component={NavLink}
          to="/cart"
        >
          Редактировать заказ
        </Button>
      </Box>
    </Container>
  );
};

export default Checkout;
