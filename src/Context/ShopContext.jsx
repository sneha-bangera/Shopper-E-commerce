import all_product from "../Components/Assets/all_products";
import React, { createContext, useState } from "react";

export const ShopContext = createContext(null);

function getDefaultCart(){
  let cart = {}
  for(let index = 0; index < all_product.length; index++){
    cart[index] = 0;
  }
  return cart;
}

function ShopContextProvider(props) {

    const [cartItems, setCartItems] = useState(getDefaultCart());

    function addToCart(itemId){
      setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}))
      console.log(cartItems);
    }

    function removeFromCart(itemId){
      setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
    }

    function getTotalCartAmt(){
      let totalAmt = 0;
      for(const item in cartItems){
        if(cartItems[item]>0)
          {
            let itemInfo = all_product.find((product) => product.id===Number(item))
            totalAmt += itemInfo.new_price * cartItems[item]
          }
      }
      return totalAmt;
    }

    function getTotalCartItem(){
      let totalItem = 0;
      for(const item in cartItems){
        if(cartItems[item]>0)
          {
            totalItem += cartItems[item]
          }
      }
      return totalItem;
    }

    const contextValue = {all_product, cartItems, addToCart, removeFromCart, getTotalCartAmt, getTotalCartItem}

    return (
      <ShopContext.Provider value={contextValue}>
        {props.children}
      </ShopContext.Provider>
    )
  }
export default ShopContextProvider;