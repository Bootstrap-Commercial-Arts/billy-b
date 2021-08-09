import { Link } from "gatsby"
import React from "react"
import theme from "../styles/theme"

const HomePageBlockB = ({
  header,
  details,
  image,
  linkText,
  linkUrl,
  headerColor,
  bodyColor,
}) => (
  <div>
    <div>
      <h3
        css={{
          padding: "1rem 0 0.5rem 2rem",
          textTransform: "uppercase",
          height: "3rem",
          lineHeight: "3rem",
          fontSize: "2rem",
          fontWeight: 300,
          textAlign: "left",
          backgroundColor: headerColor,
          color: theme.black,
        }}
      >
        {header}
      </h3>
    </div>
    <div
      css={{
        display: "grid",
        gridTemplateColumns: "3fr 1fr",
        backgroundColor: bodyColor,
        color: theme.black,
        [theme.mobile]: {
          display: "block",
          textAlign: "center",
        },
      }}
    >
      <img
        src={image}
        css={{
          width: "14rem",
          order: 2,
          gridColumn: "2/3",
          gridRow: "1/3",
          [theme.mobile]: {
            order: 1,
          },
        }}
      />
      <p
        css={{
          marginRight: "1.5rem",
          marginLeft: "1.5rem",
          fontSize: "1.5rem",
          order: 1,
          gridColumn: "1/2",
          gridRow: "1/2",
          [theme.mobile]: {
            order: 2,
          },
        }}
      >
        {details}
      </p>
      {linkUrl && linkText && (
        <div
          css={{
            textAlign: "center",
            marginTop: "1rem",
            order: 3,
            gridColumn: "1/2",
            gridRow: "2/3",
            [theme.mobile]: {
              order: 3,
            },
          }}
        >
          <Link
            to={linkUrl}
            css={{
              backgroundColor: headerColor,
              color: theme.black,
              marginLeft: "auto",
              marginRight: "auto",
              padding: "0.25rem 3rem",
              borderRadius: 9999,
              borderStyle: "none",
              fontSize: "1rem",
              letterSpacing: "7%",
              textTransform: "uppercase",
              textDecoration: "none",
              boxShadow: "0 3px 4px rgb(0 0 0 / 20%)",
            }}
          >
            {linkText}
          </Link>
          <br></br>
        </div>
      )}
    </div>
  </div>
)

export default HomePageBlockB
