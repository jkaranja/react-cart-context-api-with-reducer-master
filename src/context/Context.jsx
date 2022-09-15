//provider wrapper component
import React, { createContext, useContext, useReducer } from "react";
import { cartReducer, filterReducer } from "./Reducers";
import faker  from "faker";

faker.seed(99);

const CartContext = createContext();

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products,
    searchQuery: "",
    cart: [],
  });

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    byStock: true,
    byFastDelivery: false,
    byRating: 0,
    sort:"",
    
  });

 

  return (
    <CartContext.Provider
      value={{ state, dispatch, filterState, filterDispatch }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default Context;

//when using hooks, function must start with capital letter=all react functions
export const CartState = ()=>{
    return useContext(CartContext)
}
