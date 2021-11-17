import ProductService from '../../services/ProductService';
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_ADD_ITEM_QTY, CART_REMOVE_ITEM_QTY, CART_CLEAR_ITEMS} from '../constants/cartConstants';

export const addToCart = (id, qty = 1) => async (dispatch, getState) => {
  const data = await ProductService.getById(id);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data.itemNo,
      name: data.name,
      image: data.imageUrls[0],
      price: data.currentPrice,
      brand: data.brand,
      color: data.color,
      countInStock: data.quantity,
      qty,
    },
  });

  localStorage.setItem(
    'cartItems',
    JSON.stringify(getState().cart.cartItems),
  );
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
export const removeFromCartItemQty = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM_QTY,
    payload: id,
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
export const addToCartItemQty = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_ADD_ITEM_QTY,
    payload: id,
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
export const removeAllFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_CLEAR_ITEMS,
    payload: id,
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};