import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_CLEAR_ITEMS,
  CART_ADD_ITEM_QTY,
  CART_REMOVE_ITEM_QTY,
} from '../constants/cartConstants';

// eslint-disable-next-line import/prefer-default-export
export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) => (x.product === existItem.product ? item : x)),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, item],
      };

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case CART_CLEAR_ITEMS:
      return {
        ...state,
        cartItems: [],
      };
    case CART_ADD_ITEM_QTY:
        return {
          ...state,
          cartItems: state.cartItems.map((x) => (x.product === action.payload && x.qty < x.countInStock? {...x, qty: x.qty +1 } : x)),
      };
    case CART_REMOVE_ITEM_QTY:
      return {
        ...state,
        cartItems: state.cartItems.map((x) => (x.product === action.payload && x.qty > 1 ? {...x, qty: x.qty -1 } : x)),
      };
    default:
      return state;
  }
  
};
