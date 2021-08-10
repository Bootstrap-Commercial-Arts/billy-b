import React from "react"
import BlockContent from "@sanity/block-content-to-react"

import Layout from "../../components/Layout"

import albumsHero from "../../assets/albums-hero.jpg"
import theme from "../../styles/theme"
import Button from "../../components/Button"
import Accordion from "../../components/Accordion"
// NOTE: STUBBED PAGE UNTIL DECISION IS MADE TO ACCEPT ALBUM DATA FROM SANITY
const AlbumPage = ({ data }) => {
  const album = data.album
  return (
    <Layout title="Billy B Album Page">
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
      <div
        css={{
          paddingBottom: "14rem",
          [theme.mobile]: {
            paddingBottom: "4rem",
          },
        }}
      >
        <div
          css={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            [theme.mobile]: {
              display: "block",
            },
          }}
        >
          <div
            css={{
              width: "66.666667%",
              marginLeft: "auto",
              marginRight: "auto",
              paddingTop: "3rem",
              [theme.mobile]: {
                textAlign: "center",
              },
            }}
          >
            <img
              src={album.albumCover.asset.url}
              css={{
                height: "auto",
                width: "100%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          </div>
          <div
            css={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center", 
            }}
          >
            <div
              css={{
                textTransform: "uppercase",
                textAlign: "left",
                marginLeft: "auto",
                marginRight: "auto",
                paddingTop: "3rem",
                width: "80%",
                fontSize: "2.25rem",
                lineHeight: "2.5rem",
                color: theme.black,
                [theme.mobile]: {
                  textAlign: "center",
                },
              }}
            >
              {album.albumName} - {album.albumPrice}
            </div>
            <div
              css={{
                display: "flex",
                marginTop: "2rem",
                justifyContent: "space-around",
                [theme.mobile]: {
                  display: "grid",
                  gridTemplateRows: "1fr 1fr",
                  rowGap: "2rem",
                  textAlign: "center",
                  justifyContent: "center",
                  margin: "2rem",
                },
              }}
            >
              
              <a href={album.purchaseUrl} target="_blank" rel="noreferrer">
                <Button
                backgroundColor={theme.lightYellow}
                textColor={theme.black}
                >
                  Purchase Album
                </Button>
              </a>
              <a href={album.applePurchaseUrl} target="_blank" rel="noreferrer">
                <Button
                backgroundColor={theme.mediumBlue}
                textColor={theme.black}
                >
                  Apple Music
                </Button>
              </a>
            </div>
          </div>
        </div>
        {/* LYRICS SECTION */}
        <div>
          <h2
            css={{
              padding: "2rem 4rem 0",
            }}
          >
            Click The song title below to see the lyrics.
          </h2>

          {album.songs.map(song => {
            return (
              <Accordion title={song.title} key={song.id}>
                {<BlockContent blocks={song.lyricContent} />}
              </Accordion>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default AlbumPage

// query($clientId: String!) {
//     clients(id: { eq: $clientId }) {
//       firstName
//       lastName
//       email
//     }
//   }
export const query = graphql`
         query($eq: String) {
           album: sanityAlbums(slug: { current: { eq: $eq } }) {
             albumCover {
               asset {
                 fluid {
                   srcSet
                   src
                 }
                 title
                 url
               }
             }
             albumName
             albumPrice
             id
             purchaseUrl
             applePurchaseUrl
             songs {
               lyricContent: _rawLyricContent(
                 resolveReferences: { maxDepth: 10 }
               )
               id
               title
             }
           }
         }
       `
