import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import theme from "../styles/theme"
import AlbumInfo from "../components/AlbumInfo"
import albumsHero from "../assets/albums-hero.jpg"

const page404 = () => (
  <Layout title="Billy B 404 Page">
    <img
      src={albumsHero}
      width="max-content"
      css={{
        position: "relative",
        objectFit: "cover",
        display: "block",
        maxWidth: "100%",
      }}
    />
    <div>
      <p
        css={{
          width: "90%",
          margin: "2rem auto",
          paddingBottom: "1.5rem",
          color: theme.white,
          lineHeight: "1.75rem",
          fontWeight: 300,
          fontStyle: "italic",
        }}
      >
        Oops you reach this page BY Accident 404
      </p>
    </div>


  </Layout>
)

export default page404

export const query = graphql`
         {
           page: allSanityAlbums {
             albums: nodes {
               albumCover {
                 asset {
                   url
                 }
               }
               slug {
                 current
               }
               albumName
               albumPrice
               purchaseUrl
               applePurchaseUrl
               id: _id
             }
           }
         }
       `
