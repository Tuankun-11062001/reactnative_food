import {
  ADDTOCARTPROCESS,
  ADDTOCARTORIGIN,
  REMOVEITEMCART,
  UPDATEITEMCART,
  UPDATETOTALCART,
} from "./contain";

const ADD_TO_CART_PROCESS = (payload) => ({
  type: ADDTOCARTPROCESS,
  payload,
});

const ADD_TO_CART_ORIGIN = (payload) => ({
  type: ADDTOCARTORIGIN,
  payload,
});

const REMOVE_ITEM_CART = (payload) => ({
  type: REMOVEITEMCART,
  payload,
});

const UPDATE_ITEM_CART = (payload) => ({
  type: UPDATEITEMCART,
  payload,
});

const UPDATE_TOTAL_CART = (payload) => ({
  type: UPDATETOTALCART,
  payload,
});

export {
  ADD_TO_CART_PROCESS,
  ADD_TO_CART_ORIGIN,
  REMOVE_ITEM_CART,
  UPDATE_ITEM_CART,
  UPDATE_TOTAL_CART,
};
