import React from "react"
import theme from "../styles/theme"

const ExternalReferences = ({ image, title, date, details }) => (
  <div css={{ backgroundColor: theme.darkBlue, marginTop: "4rem" }}>
    <div
      css={{
        display: "grid",
        gridTemplateColumns: "1fr 4fr",
        padding: "0 auto",
        [theme.mobile]: {
          display: "block",
        },
      }}
    >
      <div
        css={{
          paddingLeft: "1rem",
          [theme.mobile]: {
            paddingLeft: 0,
          },
        }}
      >
        <div
          css={{
            width: 150,
            margin: "0 auto",
            [theme.mobile]: {
              width: 250,
            },
          }}
        >
          <a href="#">
            <img
              src={image || "https://via.placeholder.com/150"}
              alt=""
              css={{ width: "100%", height: "100%" }}
            />
          </a>
        </div>
        <div css={{ textAlign: "center", paddingTop: "0.5rem" }}>
          <button
            css={{
              backgroundColor: theme.mediumBlue,
              color: theme.black,
              padding: "0.25rem 3rem",
              borderRadius: 9999,
              borderColor: theme.mediumBlue,
              borderStyle: "none",
              textTransform: "uppercase",
              textAlign: "center",
              margin: "0 auto",
            }}
          >
            Visit Website
          </button>
        </div>
      </div>
      <div
        css={{
          width: "91.666667%",
          margin: "0 auto",
          padding: "1rem 0",
          color: theme.white,
        }}
      >
        <div
          css={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div css={{ fontSize: "2rem", lineHeight: "2rem" }}>{title}</div>
          <div
            css={{ fontWeight: 300, fontStyle: "italic", textAlign: "right" }}
          >
            {date}
          </div>
        </div>
        <div>
          <p
            css={{ marginTop: "2rem", fontWeight: 300, lineHeight: "1.75rem" }}
          >
            {details}
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default ExternalReferences
