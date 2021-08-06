// First, we must import the schema creator

import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import siteSettings from "./documents/siteSettings";
import seoSettings from "./objects/seoSettings";

import teacherGuides from "./objects/teacherGuides";
import upload from "./objects/upload";
import lyrics from "./documents/lyrics";

import shows from "./documents/shows";
import albums from "./documents/albums";
import contact from "./documents/contact";
// import shopifyProduct from "./documents/shopifyProduct";
// import shopifyCollection from "./documents/shopifyCollection";

import blockContent from "./objects/blockContent";
import { saneShopify } from "@sane-shopify/sanity-plugin";

const saneShopifyConfig = {};

console.log("saneShopifyConfig ", saneShopifyConfig);

const saneShopifyTypes = saneShopify(saneShopifyConfig);

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    siteSettings,
    seoSettings,
    teacherGuides,
    upload,
    lyrics,
    shows,
    contact,
    albums,
    blockContent,
    ...saneShopifyTypes,
  ]),
});
