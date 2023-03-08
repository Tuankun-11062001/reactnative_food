import { useContext } from "react";
import { UserContext, CartContext, BoxContext } from "./Context";

const useUserContext = () => {
  const [stateUser, dispatchUser] = useContext(UserContext);
  return [stateUser, dispatchUser];
};

const useCartContext = () => {
  const [stateCart, dispatchCart] = useContext(CartContext);
  return [stateCart, dispatchCart];
};

const useBoxContext = () => {
  const [stateBox, dispatchBox] = useContext(BoxContext);
  return [stateBox, dispatchBox];
};

export { useUserContext, useCartContext, useBoxContext };
