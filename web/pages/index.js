import Head from "next/head";
import Layout from "../component/layout";
import HomePage from "../component/homepage";

function Home() {
  return (
    <div className="">
      <Head>
        <title>Billy B</title>
      </Head>
      <Layout />
      <HomePage />
    </div>
  );
}

export default Home;
