import { Link } from "gatsby"
import React from "react"
import theme from "../styles/theme"

const HomePageBlockA = ({
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
        gridTemplateColumns: "1fr 3fr",
        backgroundColor: bodyColor,
        color: theme.black,
        [theme.mobile]: {
          gridTemplateColumns: "none",
          textAlign: "center",
          justifyItems: "center",
        },
      }}
    >
      <img
        src={image}
        css={{
          width: "14rem",
        }}
      />
      <div>
        <p
          css={{
            marginRight: "1.5rem",
            marginLeft: "1.5rem",
            fontSize: "1.5rem",
          }}
        >
          {details}
        </p>
        {linkText && linkUrl && (
          <div
            css={{
              textAlign: "center",
              marginTop: "1rem",
              justifyItems: "end",
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
              }}
            >
              {linkText}
            </Link>
            <br></br>
          </div>
        )}
      </div>
    </div>
  </div>
)

export default HomePageBlockA
