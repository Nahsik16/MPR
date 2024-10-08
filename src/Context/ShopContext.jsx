import React, { createContext, useState }  from "react";
import all_product from "../Components/assets/all_product"


export const ShopContext =createContext(null);
const getDefaultCart=()=>{
    let cart={};
    for (let index=0;index<all_product.length+1;index++){
      cart[index]=0;
    }
    return cart;
  }
const ShopContextProvider = (props) => {
  const [cartItems,setcartItems] =useState(getDefaultCart())

  const addtocart =(itemId) =>{
    setcartItems((prev)=>({...prev,[itemId]:(prev[itemId]||0)+1,}));
  }
  const removefromcart =(itemId) =>{
    setcartItems((prev)=>({...prev,[itemId]:prev[itemId]>0?prev[itemId]-1:0,}));
  }
  const getTotalCartAmount =()=>{
    let total=0;
    for (const item in cartItems){
      if(cartItems[item]>0){
        let itemInfo =all_product.find((product)=>product.id===Number(item))
        total += cartItems[item]*itemInfo.new_price;
      }
    }
    return total;
  }
  const getTotalCartItems =()=>{
    let total=0;
    for (const item in cartItems){
      if(cartItems[item]>0){
        total += cartItems[item];
      }
    }
    return total;
  }
  const contextValue ={all_product,getTotalCartItems, cartItems, setcartItems,addtocart,removefromcart,getTotalCartAmount};

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}
export default ShopContextProvider;