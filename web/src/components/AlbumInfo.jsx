import React from "react"
import theme from "../styles/theme"

const AlbumInfo = ({ image, title }) => (
  <div
    css={{
      backgroundColor: theme.darkBlue,
      marginTop: "2rem",
      marginBottom: "1rem",
    }}
  >
    <div css={{ paddingLeft: "1rem" }}>
      <div>
        <img src={image.url} alt="" css={{ width: 200 }} />
      </div>
      <div css={{ paddingTop: "0.5rem", fontWeight: 500, color: theme.black }}>
        {title}
      </div>
    </div>
  </div>
)

export default AlbumInfo
