import React from "react"
import Layout from "../components/Layout"
import ShowInfo from "../components/ShowInfo"
import showHero from "../assets/show-hero.jpg"
import theme from "../styles/theme"
import Button from "../components/Button"
import { Link } from "gatsby"

const SingleShowPage = ({
  data: {
    page: { shows },
  },
}) => (
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
          Enjoy Billy B’s extensive SHOW TEXT CAN GO HERE, with purchase links and lyrics
          for every song! Lyrics for all of Billy B’s songs are available to
          view, download, or print to use on your own or for your students. This
          resource is very helpful for those who are deaf and hard of hearing,
          speak English as a secong language, or if you just want to sing along!
        </p>
      </div>
      {/* LYRICS SECTION */}
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
          {shows.map(({ id, ...rest }) => (
            <ShowInfo key={id} {...rest} />
          ))}
        </div>
      </div>
    </div>
  </Layout>
)

export default SingleShowPage

export const query = graphql`
{
           page: allSanityShows {
             shows: nodes {
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
         }
       `
