import React from "react";
import Head from "next/head";
import Image from "next/image";
import aboutimage from "../public/image/About-Hero 2.jpg";
import { sanityClient } from "../lib/sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

const Lyrics = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Head>
        <title>Billy B Lyrics Page</title>
      </Head>
      <div className="bg-darkblue shadow-2xl">
        <Image src={aboutimage} />
        <p className="italic font-light py-8 w-10/12 ml-auto mr-auto text-white leading-7">
          Enjoy Billy B’s extensive discography, with purchase links and lyrics
          for every song! Lyrics for all of Billy B's songs are available to
          view, download, or print to use on your own or for your students. This
          resource is very helpful for those who are deaf and hard of hearing,
          speak English as a second language, or if you just want to sing along!
        </p>
      </div>
      <div className="grid grid-cols-2 w-10/12 gap-2 ml-auto mr-auto mt-8 lg:grid-cols-3 xl:grid-cols-4 mt-6 lg:gap-8 border ">
        {data.map((dt, index) => (
          <div key={index}>
            <img
              src={builder.image(dt.albumCover.asset._ref)}
              className="ml-auto mr-auto w-full lg:w-3/6 lg:mr-12"
            />
            <p>{dt.albumName}</p>
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

export default Lyrics;
