//memoization - to give response only when state changes

import {createSelector} from 'reselect';

const selectCart=state=>state.cart;      //input selector

export const selectCartItems=createSelector(
  [selectCart],                      //output from input selector
  (cart)=>cart.cartItems
)

export const selectCartItemsCount=createSelector(
    [selectCartItems],
    (cartItems)=>cartItems.reduce(
        (accumulatedQuantity,cartItem)=>accumulatedQuantity+cartItem.quantity,
    0
)
)