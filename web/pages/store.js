import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import storeimage from "../public/image/Store-Hero.jpg";
import { sanityClient } from "../lib/sanity";
import { client, addProductToCart } from "../lib/shopify";
import imageUrlBuilder from "@sanity/image-url";
import Router from "next/router";

const builder = imageUrlBuilder(sanityClient);

const Store = ({ products }) => {
  console.log("products", products);
  // console.log("data", data);
  // console.log(products);
  // console.log("albums", albums);
  const [albums, setAlbums] = useState([]);
  const [count, setCount] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState("");

  useEffect(async () => {
    const query = '*[_type == "shopifyProduct"]';
    const data = await sanityClient.fetch(query);
    console.log("useEffect", data);

    setAlbums(data);
    // const products = data.map((i) => i.sourceData);
    // setAlbums(products);
  }, []);

  const result = albums.map((i) => i.sourceData);
  console.log("result", result);
  const handleCount = (value) =>
    !(count === 0 && value === -1) ? setCount(count + value) : count;

  const addToCart = async (prodId) => {
    try {
      if (count < 1) return;
      const variants = products.map((i) => i.variants);
      const [items] = variants;
      const variantIdItem = items.map((i) => i.id);
      const [variantId] = variantIdItem;
      addProductToCart([
        {
          variantId,
          quantity: Number(count),
        },
      ]);
      Router.push("/shoppingcart");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="bg-mediumblue">
      <Head>
        <title>Billy B Store Page</title>
      </Head>
      <div className="bg-mediumblue">
        <div className="w-10/12 ml-auto mr-auto pt-12 pb-12">
          <Image src={storeimage} />
        </div>
      </div>
      <div className="flex flex-col bg-darkblue pt-12 shadow-2xl">
        <button className="shadow-2xl font-bold text-white ml-auto py-1 mr-auto mb-8 w-72 px-12 rounded-full bg-lightblue">
          Billy B on Apple Music
        </button>
        <button className="shadow-2xl font-bold text-white ml-auto py-1 mr-auto mb-8 w-72 px-12 rounded-full bg-lightblue">
          Visit Billy B's Patreon
        </button>
      </div>
      <div className="grid grid-cols-2 w-10/12 gap-2 ml-auto mr-auto mt-8 pb-8 lg:grid-cols-3 xl:grid-cols-4 mt-6 lg:gap-8">
        {/* {data.map((dt, index) => (
          <div key={index}>
            <img
              src={builder.image(dt.albumCover.asset._ref)}
              className="ml-auto mr-auto w-full lg:w-3/6 lg:mr-12"
            />
            <p className="text-white font-light mb-2 mt-4 leading-none">
              {dt.title}
            </p>
            <p className="text-white">${dt.albumPrice}</p>
            <button className="mt-4 shadow-2xl py-2  mb-8 w-32 px-4 rounded-full uppercase bg-lightyellow">
              Purchase
            </button>
          </div>
        ))} */}

        {result.map((rt, index) => (
          <div key={index}>
            <img
              src={rt.images.edges.map((j) => j.node.originalSrc)}
              className="ml-auto mr-auto w-full lg:w-3/6 lg:mr-12"
            />
            <p className="text-white font-light mb-2 mt-4 leading-none">
              {rt.title}
            </p>
            <p className="text-white">
              ${rt.variants.edges.map((i) => i.node.priceV2.amount)}
            </p>
            <div className="flex items-center mt-3">
              <button
                onClick={() => handleCount(1)}
                className="text-white focus:outline-none focus:text-gray-600"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              <span className="text-gray-700 text-lg mx-2">{count}</span>
              <button
                onClick={() => handleCount(-1)}
                className="text-white focus:outline-none focus:text-gray-600"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
            <button
              onClick={addToCart}
              className="mt-4 shadow-2xl py-2  mb-8 w-32 px-4 rounded-full uppercase bg-lightyellow text-sm"
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Sanityio fetching data

// export const getServerSideProps = async () => {
//   const query = '*[_type == "shopifyProduct"]';
//   const data = await sanityClient.fetch(query);
//   console.log("getServerSideProps", data);

//   const products = data.map((i) => i.sourceData);
//   return {
//     props: {
//       products,
//     },
//   };
// };

// Shopify fetching products
// export const getServerSideProps = async (context) => {
//   const products = await client.product.fetchAll();
//   const albumCollections = await client.collection.fetchAllWithProducts();
//   console.log("albumCollections", JSON.parse(JSON.stringify(albumCollections)));
//   return {
//     props: {
//       products: JSON.parse(JSON.stringify(products)),
//       albums: JSON.parse(JSON.stringify(albumCollections)),
//     },
//   };
// };

export default Store;
