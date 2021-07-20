import Head from "next/head";
import { gql, GraphQLClient } from "graphql-request";
import Layout from "../component/layout";
import HomePage from "../component/homepage";

function Home() {
  return (
    <div className="">
      <Head>
        <title>Billy B</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HomePage />
    </div>
  );
}

// web/pages/index.js
console.log(
  "process.env.NEXT_PUBLIC_SHOPIFY_URL",
  process.env.NEXT_PUBLIC_SHOPIFY_URL
);
console.log("process.env.NEXT_PUBLIC_TOKEN", process.env.NEXT_PUBLIC_TOKEN);
export async function getStaticProps() {
  const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_SHOPIFY_URL, {
    headers: {
      "X-Shopify-Storefront-Access-Token": process.env.NEXT_PUBLIC_TOKEN,
    },
  });
  const query = gql`
    {
      collectionByHandle(handle: "albums") {
        id
        title
        products(first: 12) {
          edges {
            node {
              id
              title
              variants(first: 1) {
                edges {
                  node {
                    id
                  }
                }
              }
              images(first: 1) {
                edges {
                  node {
                    altText
                    transformedSrc
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const res = await graphQLClient.request(query);

  if (res.errors) {
    console.log(JSON.stringify(res.errors, null, 2));
    throw Error("Unable to retrieve Shopify Products. Please check logs");
  }

  return {
    props: {
      data: {
        collection: res.collectionByHandle,
      },
    },
  };
}

export default Home;
