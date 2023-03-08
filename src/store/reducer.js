import {
  ADDTOCARTORIGIN,
  ADDTOCARTPROCESS,
  REMOVEITEMCART,
  UPDATEITEMCART,
  UPDATETOTALCART,
} from "./contain";

const userReducer = (state, action) => {
  switch (action.type) {
  }
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADDTOCARTPROCESS:
      return {
        ...state,
        cartProcess: [...state.cartProcess, action.payload],
      };
    case ADDTOCARTORIGIN:
      return {
        ...state,
        cartOrigin: [...state.cartOrigin, action.payload],
      };
    case REMOVEITEMCART:
      const cart = state.cartProcess;
      const newCart = cart.filter((item) => item.id !== action.payload);
      return {
        ...state,
        cartProcess: newCart,
      };
    case UPDATEITEMCART:
      const cartUpdate = state.cartProcess;
      cartUpdate[action.payload.indexCart] = action.payload;
      return {
        ...state,
        cartProcess: cartUpdate,
      };
    case UPDATETOTALCART:
      return {
        ...state,
        total: action.payload,
      };
    default:
      return state;
  }
};

export { userReducer, cartReducer };
