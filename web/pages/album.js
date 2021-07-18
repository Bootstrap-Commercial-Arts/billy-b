import React from "react";
import Head from "next/head";
import { sanityClient } from "../lib/sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

const Album = ({ data }) => {
  console.log(data);
  return (
    <div className="bg-mediumblue">
      <Head>
        <title>Billy B Album Page</title>
      </Head>
      <div>
        {data.map((dt, index) => (
          <div key={index}>
            <div className="w-8/12 ml-auto mr-auto pt-12">
              <img
                src={builder.image(dt.albumCover.asset._ref)}
                className="ml-auto mr-auto w-full lg:w-3/6 lg:mr-12"
              />
            </div>
            <p className="uppercase text-4xl text-center w-4/5 ml-auto mr-auto pt-12">
              {dt.albumName}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col mt-8">
        <button className="shadow-2xl  ml-auto py-1 mr-auto mb-4 w-60 px-8 rounded-full uppercase bg-lightyellow">
          Direct Download
        </button>
        <button className="shadow-2xl  ml-auto py-1 mr-auto mb-4 w-60 px-8 rounded-full uppercase bg-lightblue">
          Apple Music
        </button>
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

export default Album;
