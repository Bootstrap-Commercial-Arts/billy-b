import React from "react"
import theme from "../styles/theme"
import { Link } from "gatsby"

const ShowInfo = ({ guide, slug }) => (
  <div
    css={{
      backgroundColor: theme.darkBlue,
      marginTop: "2rem",
      marginBottom: "1rem",
    }}
  >
    <div css={{ paddingLeft: "1rem" }}>
      <Link to={slug.current}>
        <div>
          <img src={guide.coverImage.asset.url} alt="" css={{ width: "100%", }} />
        </div>
        <div
          css={{
            paddingTop: "0.5rem",
            fontWeight: 500,
            color: theme.black,
          }}
        >
          {guide.title}
        </div>
      </Link>
    </div>
  </div>
)

export default ShowInfo
