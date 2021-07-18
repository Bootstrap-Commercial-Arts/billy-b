// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import siteSettings from "./documents/siteSettings";
import seoSettings from "./objects/seoSettings";

import shows from "./documents/shows";
import lyrics from "./documents/lyrics";
import albums from "./documents/albums";
import contact from "./documents/contact";

import blockContent from "./objects/blockContent";
import guides from "./objects/guides";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: "default",
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        siteSettings,
        seoSettings,
        shows,
        lyrics,
        contact,
        albums,
        guides,
        blockContent,
    ]),
});