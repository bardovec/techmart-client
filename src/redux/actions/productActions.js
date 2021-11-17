import ProductService from "../../services/ProductService";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_COLORS,
  PRODUCT_LIST_FILTERED,
  PRODUCT_CATEGORY_REQUEST,
  PRODUCT_CATEGORY_SUCCESS,
  PRODUCT_CATEGORY_FAIL,
} from "../constants/productConstants";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const products = await ProductService.getAll();
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: products,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductsFiltered =
  (seachValue = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST });

      const products = await ProductService.getAll();
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(seachValue.toLowerCase())
      );

      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: products,
      });
      dispatch({
        type: PRODUCT_LIST_FILTERED,
        payload: filteredProducts,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const categoryProducts = (category) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_CATEGORY_REQUEST });

    const products = await ProductService.getAll();

    const categoryList = products.filter(
      (item) => item.categories === category
    );
    dispatch({
      type: PRODUCT_CATEGORY_SUCCESS,
      payload: categoryList,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_CATEGORY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const product = await ProductService.getById(id);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: product,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductColors = (id) => async (dispatch) => {
  try {
    const products = await ProductService.getAll();
    const product = products.find((el) => +el.itemNo === +id);
   // console.log(product);
   const productColors = products.filter((prod) => prod.name === product.name)
  console.log(productColors);
    dispatch({
      type: PRODUCT_DETAILS_COLORS,
      payload: productColors,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const sortByAscending = (array) => {
  const sort = [...array].sort((a, b) => b.currentPrice - a.currentPrice);
  return sort;
};

export const sortByDescending = (array) => {
  const sort = [...array].sort((a, b) => a.currentPrice - b.currentPrice);
  return sort;
};
export const productsFilter = (
  array,
  color,
  brand,
  min,
  max,
  quantity
) => {
  const filteredArr = [...array].filter(
    (item) =>
      (!color.length || color.includes(item.color)) &&
      (!brand.length || brand.includes(item.brand)) &&
      item &&
      item.currentPrice >= min &&
      item.currentPrice <= max &&
      (quantity.noInStock && quantity.inStock
        ? item
        : (!quantity.noInStock || item.quantity === 0) &&
          (!quantity.inStock || item.quantity !== 0))
  );
  return filteredArr;
};
