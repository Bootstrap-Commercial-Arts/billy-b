import Client from "shopify-buy";

console.log(process.env.NEXT_PUBLIC_SHOPIFY_URL);

// Initializing a client to return content in the store's primary language
export const client = Client.buildClient({
    domain: process.env.NEXT_PUBLIC_SHOPIFY_URL,
    storefrontAccessToken: process.env.NEXT_PUBLIC_TOKEN,
});