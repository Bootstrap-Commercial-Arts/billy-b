import React from "react"
import theme from "../styles/theme"
import { Link } from "gatsby"

const AlbumInfo = ({ albumCover, albumName ,albumPrice, slug}) => (
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
          <img src={albumCover.asset.url} alt="" css={{ width: 200 }} />
        </div>
        <div
          css={{ paddingTop: "0.5rem", fontWeight: 500, color: theme.black }}
        >
          {albumName}
        </div>
      </Link>
    </div>
  </div>
)

export default AlbumInfo
