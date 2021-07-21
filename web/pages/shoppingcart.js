import React, { useState, useEffect } from "react";
import Image from "next/image";
import Router from "next/router";
import { client, getCart, createCheckout } from "../lib/shopify";

const ShoppingCart = () => {
  const [shoppingCartItems, setShoppingCartItems] = useState();
  const [cartEmpty, setCartEmpty] = useState(true);

  useEffect(async () => {
    const cartItems = await getCart();
    console.log("useeffect", cartItems);
    if (cartItems !== undefined) {
      setShoppingCartItems(cartItems);
      setCartEmpty(false);
    } else {
      setCartEmpty(true);
    }
  }, []);

  //   console.log("shoppingCartItems", shoppingCartItems);
  //   const data = Object.entries(shoppingCartItems).flat();
  //   const { id, lineItems, totalPrice, totalPriceV2, webUrl } = shoppingCartItems;
  //   console.log("lineitems", lineItems);
  //   const imagePathArray = lineItems.map((i) => i.variant.image.src);
  //   console.log("imagePathArray", imagePathArray);
  //   const [imagePath] = imagePathArray;
  //   console.log("imagePath", imagePath);

  return (
    <div>
      <h1 className="text-2xl text-center">Shopping Cart</h1>
      <div>
        {/* <Image
          src={data.map((i) => i.lineItems.map((j) => j.variant.image.src))}
        /> */}
      </div>
      <div className="ml-16">
        <button
          className="mt-4 shadow-2xl py-2 mb-8 w-64 px-4 rounded-full uppercase bg-lightyellow text-sm"
          onClick={async () => {
            const { webUrl } = await getCart();
            Router.replace(webUrl);
          }}
        >
          Proceed to Check Out
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
  const checkoutId = await createCheckout();
  console.log("checkoutId", checkoutId);
  const checkout = await client.checkout.fetch(checkoutId);
  console.log("checkout", JSON.parse(JSON.stringify(checkout)));

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      albums: JSON.parse(JSON.stringify(albumCollections)),
    },
  };
};

export default ShoppingCart;
