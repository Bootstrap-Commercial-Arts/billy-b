import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
// import ExternalReferences from "../components/ExternalReferences"
// import StatBlock from "../components/StatBlock"
import videosHero from "../assets/videos-hero.jpg"
import theme from "../styles/theme"

const VideosPage = () => (
  <Layout title="Billy B Videos Page">
    <img
      src={videosHero}
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
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        margin: "2rem",
        [theme.mobile]: {
          display: "block",
          marginRight: 0,
          marginLeft: 0,
        },
      }}
    >
      {/* COPYPASTE FROM HERE TO NEXT COMMENT TO ADD A NEW VIDEO */}
      <div
        css={{
          padding: "0.5rem",
          marginBottom: "0.5rem",
          [theme.mobile]: {
            padding: 0,
          },
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
          css={{
            width: "100%",
            height: "16rem",
            border: "none",
          }}
        ></iframe>
        <h3
          css={{
            paddingTop: "0.5rem",
            fontSize: 14,
            fontStyle: "italic",
          }}
        >
          Song Title (2:33)
        </h3>
      </div>
      {/* TO HERE */}
      <div
        css={{
          padding: "0.5rem",
          marginBottom: "0.5rem",
          [theme.mobile]: {
            padding: 0,
          },
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
          css={{
            width: "100%",
            height: "16rem",
            border: "none",
          }}
        ></iframe>
        <h3
          css={{
            paddingTop: "0.5rem",
            fontSize: 14,
            fontStyle: "italic",
          }}
        >
          Song Title (2:33)
        </h3>
      </div>
      <div
        css={{
          padding: "0.5rem",
          marginBottom: "0.5rem",
          [theme.mobile]: {
            padding: 0,
          },
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
          css={{
            width: "100%",
            height: "16rem",
            border: "none",
          }}
        ></iframe>
        <h3
          css={{
            paddingTop: "0.5rem",
            fontSize: 14,
            fontStyle: "italic",
          }}
        >
          Song Title (2:33)
        </h3>
      </div>
      <div
        css={{
          padding: "0.5rem",
          marginBottom: "0.5rem",
          [theme.mobile]: {
            padding: 0,
          },
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
          css={{
            width: "100%",
            height: "16rem",
            border: "none",
          }}
        ></iframe>
        <h3
          css={{
            paddingTop: "0.5rem",
            fontSize: 14,
            fontStyle: "italic",
          }}
        >
          Song Title (2:33)
        </h3>
      </div>
      <div
        css={{
          padding: "0.5rem",
          marginBottom: "0.5rem",
          [theme.mobile]: {
            padding: 0,
          },
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
          css={{
            width: "100%",
            height: "16rem",
            border: "none",
          }}
        ></iframe>
        <h3
          css={{
            paddingTop: "0.5rem",
            fontSize: 14,
            fontStyle: "italic",
          }}
        >
          Song Title (2:33)
        </h3>
      </div>
      <div
        css={{
          padding: "0.5rem",
          marginBottom: "0.5rem",
          [theme.mobile]: {
            padding: 0,
          },
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
          css={{
            width: "100%",
            height: "16rem",
            border: "none",
          }}
        ></iframe>
        <h3
          css={{
            paddingTop: "0.5rem",
            fontSize: 14,
            fontStyle: "italic",
          }}
        >
          Song Title (2:33)
        </h3>
      </div>
      <div
        css={{
          padding: "0.5rem",
          marginBottom: "0.5rem",
          [theme.mobile]: {
            padding: 0,
          },
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
          css={{
            width: "100%",
            height: "16rem",
            border: "none",
          }}
        ></iframe>
        <h3
          css={{
            paddingTop: "0.5rem",
            fontSize: 14,
            fontStyle: "italic",
          }}
        >
          Song Title (2:33)
        </h3>
      </div>
    </div>
  </Layout>
)

export default VideosPage
