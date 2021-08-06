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
  <Layout title="Billy B Albums Page">
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
        Enjoy Billy B’s extensive discography, with purchase links and lyrics
        for every song! Lyrics for all of Billy B’s songs are available to view,
        download, or print to use on your own or for your students. This
        resource is very helpful for those who are deaf and hard of hearing,
        speak English as a secong language, or if you just want to sing along!
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
          // Note: AlbumInfo needs to do something with className prop for this to work
          // css={{
          //   padding: "0.5rem",
          //   marginBottom: "0.5rem",
          // }}
        ))}
      </div>
    </div>
  </Layout>
)

export default AlbumsPage

export const query = graphql`
  {
    page: allAlbumsJson {
      albums: nodes {
        title
        image {
          url: publicURL
        }
      }
    }
  }
`
