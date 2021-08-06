import React from "react"
import SanityImage from "gatsby-plugin-sanity-image"
import theme from "../styles/theme"

const TeacherGuide = ({ image, title, file, coverImage, downloadFileName }) => {
  const downloadUrl = downloadFileName
    ? `${file.asset.url}?dl=${encodeURIComponent(downloadFileName)}`
    : `${file.asset.url}?dl`

  return (
    <div
      css={{
        backgroundColor: theme.darkBlue,
        marginTop: "2rem",
        marginBottom: "1rem",
      }}
    >
      <div css={{ paddingLeft: "1rem" }}>
        <div>
          <SanityImage
            {...coverImage}
            width={200}
            alt=""
            css={{ width: 200 }}
          />
        </div>
        <div
          css={{ paddingTop: "0.5rem", fontWeight: 500, color: theme.black }}
        >
          {title}
        </div>
        <div
          css={{
            paddingTop: "0.5rem",
            fontWeight: 500,
            color: theme.black,
          }}
        >
          <button
            css={{
              backgroundColor: theme.lightBlue,
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: 9999,
              color: theme.black,
              padding: "0.25rem 1rem",
              borderStyle: "none",
              fontSize: "1rem",
              textDecoration: "none",
              [theme.mobile]: {
                backgroundColor: theme.lightBlue,
              },
            }}
          >
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              download={downloadFileName}
            >
              Download Now
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TeacherGuide
