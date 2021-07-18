import React from "react";
import Head from "next/head";

const Videos = () => {
  return (
    <div>
      <Head>
        <title>Billy B Videos Page</title>
      </Head>
      <iframe
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
        className="w-screen h-64"
      ></iframe>
      <div className="flex flex-col mt-12">
        <div className="mb-4">
          <iframe
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            className="w-screen h-64"
          ></iframe>
          <h3>Song Title</h3>
        </div>
        <div className="mb-4">
          <iframe
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            className="w-screen h-64"
          ></iframe>
          <h3>Song Title</h3>
        </div>
      </div>
    </div>
  );
};

export default Videos;
