import React from "react"
import BlockContent from "@sanity/block-content-to-react"

import Layout from "../../components/Layout"
import showHero from "../../assets/show-hero.jpg"
import theme from "../../styles/theme"
import Button from "../../components/Button"
import Accordion from "../../components/Accordion"
// NOTE: STUBBED PAGE UNTIL DECISION IS MADE TO ACCEPT ALBUM DATA FROM SANITY
const SingleShowPage = ({ params, data }) => {
  const show = data.sanityShows
 console.log(data, params)
  return (
    <Layout title="Billy B Shows Page">
      <img
        src={showHero}
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
              src={show.guide.coverImage.asset.url}
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
              {show.title}
            </div>
            <div
              css={{
                display: "flex",
                marginTop: "2rem",
                marginBottom: "2.5rem",
              }}
            >
              <a href={show.guide.guide.asset.url} target="_blank">
                <Button
                  backgroundColor={theme.lightYellow}
                  textColor={theme.black}
                >
                  Teacher Guide
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
          {show.songs.map(song => {
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

export default SingleShowPage

export const query = graphql`
         query($id: String!) {
          sanityShows(id: { eq: $id }) {
             guide {
               coverImage {
                 asset {
                   url
                 }
               }
               title
               guide {
                 asset {
                   url
                 }
               }
             }
             slug {
               current
             }
             title
             id
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
