import React from "react";
import Cart from "../pages/Cart";
import Main from "../pages/Main";
import Admin from "../pages/Admin";
import Products from "../pages/Products";
import Product from "../pages/Product";
import Contacts from "../pages/Contacts";
import Checkout from "../pages/Checkout/Checkout";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import AboutUs from "../pages/AboutUs/index";

import {
  ADMIN_ROUTE,
  CART_ROUTE,
  CHECKOUT_ROUTE,
  MAIN_PAGE_ROUTE,
  PRODUCTS_ROUTE,
  CONTACTS_ROUTE,
  SIGNIN_ROUTE,
  SIGNUP_ROUTE,
  ABOUT_US_ROUTE,
  PRODUCTS_APPLE_STORE,
  PRODUCTS_LAPTOPS,
  PRODUCTS_TABLETS,
  PRODUCTS_SMARTPHONES,
} from "../config/consts";

export const privateRoutes = [
  {
    path: CART_ROUTE,
    component: <Cart />,
    exact: true,
    admin: false,
  },
  {
    path: ADMIN_ROUTE,
    component: <Admin />,
    exact: true,
    admin: true,
  },
  {
    path: CHECKOUT_ROUTE,
    component: <Checkout />,
    exact: true,
    admin: false,
  },
];

export const publicRoutes = [
  {
    path: MAIN_PAGE_ROUTE,
    component: <Main />,
    exact: true,
  },
  {
    path: `${PRODUCTS_ROUTE}/:id`,
    component: <Product />,
    exact: true,
  },
  {
    path: CONTACTS_ROUTE,
    component: <Contacts />,
    exact: true,
  },
  {
    path: SIGNUP_ROUTE,
    component: <Signup />,
    exact: true,
  },
  {
    path: SIGNIN_ROUTE,
    component: <Signin />,
    exact: true,
  },
  {
    path: CART_ROUTE,
    component: <Cart />,
    exact: true,
  },
  {
    path: ABOUT_US_ROUTE,
    component: <AboutUs />,
    exact: true,
  },
  {
    path: PRODUCTS_APPLE_STORE,
    component: <Products category="Apple store" />,
    exact: true,
  },
  {
    path: PRODUCTS_LAPTOPS,
    component: <Products category="Ноутбуки" />,
    exact: true,
  },
  {
    path: PRODUCTS_TABLETS,
    component: <Products category="Планшеты" />,
    exact: true,
  },
  {
    path: PRODUCTS_SMARTPHONES,
    component: <Products category="Смартфоны" />,
    exact: true,
  },
];
