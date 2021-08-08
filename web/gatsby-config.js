require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    plugins: [
        "gatsby-plugin-emotion",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-svgr",
        "gatsby-transformer-json",
        {
            resolve: "gatsby-plugin-env-variables",
            options: {
                whitelist: ["SANITY_PROJECT_ID", "SANITY_DATASET"],
            },
        },
        {
            resolve: "gatsby-source-sanity",
            options: {
                projectId: process.env.SANITY_PROJECT_ID,
                dataset: process.env.SANITY_DATASET,
                token: process.env.SANITY_TOKEN,
                watchMode: process.env.NODE_ENV !== "production",
            },
        },
        {
            resolve: "gatsby-plugin-sanity-image",
            options: {
                projectId: process.env.SANITY_PROJECT_ID,
                dataset: process.env.SANITY_DATASET,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: "./src/content",
            },
        },
        {
            resolve: "gatsby-plugin-web-font-loader",
            options: {
                google: {
                    families: ["Roboto:400,500,700,900"],
                },
            },
        },
    ],
}