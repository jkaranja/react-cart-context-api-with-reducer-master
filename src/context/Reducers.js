import React from "react";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        searchQuery: action.payload.toLowerCase(),
      };
      break;
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
      break;
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
      break;
    case "UPDATE_QTY":
      return {
        ...state,
        cart: state.cart.filter((item) =>
          item.id === action.payload.id
            ? (item.qty = action.payload.qty)
            : item.qty
        ),
      };
      // return {
      //   ...state,
      //   cart: state.cart.map((item) =>
      //     item.id === action.payload.id
      //       ? { ...item, qty: action.payload.qty }
      //       : item
      //   ),
      // };
      break;
    default:
      return state;
      break;
  }
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return {
        ...state,
        sort: action.payload,
      };
      break;
    case "BY_FAST_DELIVERY":
      return {
        ...state,
        byFastDelivery: !state.byFastDelivery,
      };
      break;
    case "INCLUDE_OUT_OF_STOCK":
      return {
        ...state,
        byStock: !state.byStock,
      };
      break;
    case "BY_RATING":
      return {
        ...state,
        byRating: action.payload,
      };
      break;
    case "CLEAR_FILTER":
      return {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        sort: "",
      };
      break;
    default:
      return state;
      break;
  }
};
