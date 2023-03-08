import React, { useReducer } from "react";
import { UserContext, BoxContext, CartContext } from "./Context";
import { initCart, initUser } from "./initReducer";
import { cartReducer, userReducer } from "./reducer";

const UserProvider = ({ children }) => {
  const [stateUser, dispatchUser] = useReducer(userReducer, initUser);
  return (
    <UserContext.Provider value={[stateUser, dispatchUser]}>
      {children}
    </UserContext.Provider>
  );
};

const CartProvider = ({ children }) => {
  const [stateCart, dispatchCart] = useReducer(cartReducer, initCart);
  return (
    <CartContext.Provider value={[stateCart, dispatchCart]}>
      {children}
    </CartContext.Provider>
  );
};

export { UserProvider, CartProvider };
