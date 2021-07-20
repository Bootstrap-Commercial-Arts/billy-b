import React from "react";
import Head from "next/head";
import Image from "next/image";
import storeimage from "../public/image/Store-Hero.jpg";
import { sanityClient } from "../lib/sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

const Store = ({ data }) => {
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
        {data.map((dt, index) => (
          <div key={index}>
            <img
              src={builder.image(dt.albumCover.asset._ref)}
              className="ml-auto mr-auto w-full lg:w-3/6 lg:mr-12"
            />
            <p className="text-white font-light mb-2 mt-4 leading-none">
              {dt.albumName}
            </p>
            <p className="text-white">${dt.albumPrice}</p>
            <button className="mt-4 shadow-2xl py-2  mb-8 w-32 px-4 rounded-full uppercase bg-lightyellow">
              Purchase
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "albums"]';
  const data = await sanityClient.fetch(query);

  console.log("getServerSideProps", data);
  return {
    props: {
      data,
    },
  };
};

export default Store;
