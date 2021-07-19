import React from "react";
import Head from "next/head";
import { sanityClient } from "../lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};

const Album = ({ data }) => {
  console.log(data);
  const songs = data.map((i) => i.songs);
  const lyric = songs[0];
  console.log("lyric", lyric);
  const item = lyric.map((i) => i.lyricContent);
  console.log("item", item);
  const result = item[0];
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
      <BlockContent
        blocks={result}
        serializers={serializers}
        className="w-9/12 ml-auto mr-auto mt-12 leading-8 pb-12"
      />
    </div>
  );
};

export const getServerSideProps = async () => {
  const data = await sanityClient.fetch(`
        *[_type == 'albums']{
            ...,
            'songs': songs[] ->
        }
  `);

  console.log("getServerSideProps", data);
  return {
    props: {
      data,
    },
  };
};

export default Album;
