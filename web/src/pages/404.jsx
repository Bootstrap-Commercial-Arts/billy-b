import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import theme from "../styles/theme"
import AlbumInfo from "../components/AlbumInfo"
import albumsHero from "../assets/albums-hero.jpg"

const AlbumsPage = ({
  data: {
    page: { albums },
  },
}) => (
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
    <div
      css={{
        backgroundColor: theme.darkBlue,
        paddingTop: "1rem",
        background:
          "linear-gradient(180deg, #007B8C 0%, rgba(0, 148, 171, 0) 2rem)",
      }}
    >
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          margin: "2rem",
          "@media (max-width: 930px)": {
            gridTemplateColumns: "1fr 1fr 1fr",
          },
          [theme.mobile]: {
            gridTemplateColumns: "1fr 1fr",
          },
        }}
      >
        {albums.map(({ id, ...rest }) => (
          <AlbumInfo key={id} {...rest} />
        ))}
      </div>
    </div>
  </Layout>
)

export default AlbumsPage

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
