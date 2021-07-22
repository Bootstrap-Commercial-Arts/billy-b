require("dotenv").config();

import { createNextWebhooks } from "@sane-shopify/server";
// import dotEnv from "dotenv";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const authToken = process.env.SANITY_API_TOKEN;
const shopName = process.env.NEXT_PUBLIC_SHOPIFY_URL;
const accessToken = process.env.NEXT_PUBLIC_TOKEN;

console.log(projectId, dataset, authToken, shopName, accessToken);

if (!projectId) throw new Error("You must provide a sanity project ID");
if (!dataset) throw new Error("You must provide a sanity dataset");
if (!authToken) throw new Error("You must provide a sanity auth token");
if (!shopName) throw new Error("You must provide a shopify shop name");
if (!accessToken) throw new Error("You must provide a shopify access token");

// 🚨 Alpha breaking change: This configuration changed in 0.20.0. If you are getting errors after updating, put your `onError` handler on the `config` object, and pass that object into `createWebhooks` as the sole argument.

// optional, see below
const handleError = (err) => {
    Sentry.captureException(err);
};
const config = {
    secrets: {
        sanity: {
            projectId,
            dataset,
            authToken,
        },
        shopify: {
            shopName,
            accessToken,
        },
    },
    onError: handleError,
};

console.log("config", config);

export const webhooks = createNextWebhooks(config);