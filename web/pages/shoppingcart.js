import React, { useEffect } from "react";
import { getCart } from "../lib/shopify";

const ShoppingCart = () => {
  useEffect(async () => {
    const cartItems = await getCart();
    console.log("useeffect", cartItems);
  }, []);

  return <div>shopping cart</div>;
};

export default ShoppingCart;
