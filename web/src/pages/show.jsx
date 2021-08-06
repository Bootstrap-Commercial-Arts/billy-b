import React from "react"
import Layout from "../components/Layout"
import showHero from "../assets/show-hero.jpg"
import theme from "../styles/theme"
import Button from "../components/Button"

const SingleShowPage = () => (
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
            src="https://via.placeholder.com/150"
            css={{
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </div>
        <div>
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
            Billy B &amp; The Salish Sea
          </div>
          <div
            css={{
              display: "flex",
              marginTop: "2rem",
              marginBottom: "2.5rem",
            }}
          >
            <Button backgroundColor={theme.lightYellow} textColor={theme.black}>
              Teacher Guide
            </Button>
          </div>
        </div>
      </div>
      {/* LYRICS SECTION */}
      <div
        css={{
          ul: {
            padding: "0 4rem",
          },
          li: {
            paddingTop: "1.5rem",
            paddingBottom: "1.5rem",
            borderBottom: "0.25rem solid #45D1E6",
            color: theme.lightYellow,
            fontSize: "1.25rem",
            fontStyle: "italic",
          },
        }}
      >
        <ul>
          <li>Song Name Lyrics</li>
          <li>Song Name Lyrics</li>
          <li>Song Name Lyrics</li>
          <li>Song Name Lyrics</li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default SingleShowPage
