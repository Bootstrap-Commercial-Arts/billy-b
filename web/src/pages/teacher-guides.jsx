import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import theme from "../styles/theme"
import TeacherGuide from "../components/TeacherGuide"
import showHero from "../assets/show-hero.jpg"
import placeholderCover from "../assets/album-art/ph-album-art.jpg"

const TeacherGuidePage = ({
  data: {
    page: { guides },
  },
}) => (
  <Layout title="Billy B Teacher Guide Page">
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
        Browse through Billy B’s shows to view or download lyrics and teacher
        guides. Use these convenient guides to add to the educational power of
        Billy B’s performances! Guides include tools and resources like relevant
        vocabulary, pre- &amp; post-performance activities, and reading list for
        each show.
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
            marginRight: 0,
            marginLeft: 0,
          },
          "@media (max-width: 450px)": {
            display: "block",
            textAlign: "center",
          },
        }}
      >
        {guides.map(({ _id, guide, fileName, ...rest }) => (
          <TeacherGuide
            key={_id}
            image={placeholderCover}
            file={guide}
            downloadFileName={fileName}
            // Note: TeacherGuide needs to do something with className prop for this to work
            // css={{
            //   padding: "0.5rem",
            //   marginBottom: "0.5rem",
            // }}
            {...rest}
          />
        ))}
      </div>
    </div>
  </Layout>
)

export default TeacherGuidePage

export const query = graphql`
  {
    page: allSanityTeacherGuides {
      guides: nodes {
        _id
        title
        fileName
        guide {
          asset {
            url
          }
        }
        coverImage {
          ...ImageWithPreview
        }
      }
    }
  }
`
