import React, { useState, useEffect } from "react";
import Image from "next/image";
import Router from "next/router";
import { client, getCart } from "../lib/shopify";

const ShoppingCart = () => {
  const [shoppingCartItems, setShoppingCartItems] = useState({});
  const [cartEmpty, setCartEmpty] = useState(true);
  useEffect(async () => {
    const cartItems = await getCart();
    console.log("useeffect", cartItems);
    setShoppingCartItems(cartItems);
  }, []);

  console.log("shoppingCartItems", shoppingCartItems);

  const { id, lineItems, totalPrice, totalPriceV2, webUrl } = shoppingCartItems;
  console.log("lineitems", lineItems);
  //   const imagePath = lineItems.map((i) => i.variant.image.src);
  //   console.log(imagePath);
  //   const [item] = lineItems;
  //   console.log("item", item);
  //   const imagePath = item.variant.image.src;
  //   console.log(imagePath);

  //   if (lineItems !== undefined) {
  //     const imagePathArray = lineItems.map((i) => i.variant.image.src);

  //     const [imagePath] = imagePathArray;
  //     console.log("imagePath", imagePath);
  //   } else {
  //     return;
  //   }
  return (
    <div>
      <h1 class="text-2xl text-center">Shopping Cart</h1>
      <div className="ml-16">
        <button
          className="mt-4 shadow-2xl py-2 mb-8 w-64 px-4 rounded-full uppercase bg-lightyellow text-sm"
          onClick={async () => {
            const { webUrl } = await getCart();
            Router.replace(webUrl);
          }}
        >
          Process to Check Out
        </button>
      </div>
    </div>
  );
};

// Shopify fetching products
export const getServerSideProps = async (context) => {
  const products = await client.product.fetchAll();
  const albumCollections = await client.collection.fetchAllWithProducts();
  console.log("albumCollections", JSON.parse(JSON.stringify(albumCollections)));
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      albums: JSON.parse(JSON.stringify(albumCollections)),
    },
  };
};

export default ShoppingCart;
