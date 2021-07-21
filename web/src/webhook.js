import { createNextWebhooks } from "@sane-shopify/server";
import dotEnv from "dotenv";

dotEnv.config();

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const authToken = process.env.SANITY_API_TOKEN;
const shopName = process.env.NEXT_PUBLIC_SHOPIFY_URL;
const accessToken = process.env.NEXT_PUBLIC_TOKEN;

if (!projectId) throw new Error("You must provide a sanity project ID");
if (!dataset) throw new Error("You must provide a sanity dataset");
if (!authToken) throw new Error("You must provide a sanity auth token");
if (!shopName) throw new Error("You must provide a shopify shop name");
if (!accessToken) throw new Error("You must provide a shopify access token");
