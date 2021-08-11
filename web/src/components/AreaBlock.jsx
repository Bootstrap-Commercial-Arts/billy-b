import React from "react"
import theme from "../styles/theme"

const AreaBlock = ({ areaHeader, areaTitle, areaPhone, areaLink }) => (
  <div
    css={{
      alignContent: "space-between",
      borderColor: theme.mediumBlue,
      borderWidth: 2,
      borderStyle: "solid",
      [theme.mobile]: {
        marginBottom: "1rem",
      },
    }}
  >
    <div
      css={{
        padding: "1rem 0 1rem 1rem",
        backgroundColor: theme.mediumBlue,
        color: theme.white,
        fontSize: "1.5rem",
        fontWeight: 300,
        textTransform: "uppercase",
        height: "2rem",
      }}
    >
      {areaHeader}
    </div>
    <div
      css={{
        padding: "1rem 0 1rem 1rem",
        backgroundColor: theme.darkBlue,
        color: theme.black,
        a: {
          textDecoration: "none",
          color: theme.black,
        },
        "a:hover": {
          color: theme.mediumYellow,
        },
        // backgroundColor: theme.mediumYellow,
      }}
    >
      <div css={{ fontSize: "2rem", paddingBottom: "1rem" }}>{areaTitle}</div>
      <div css={{ paddingBottom: "0.5rem" }}>{areaPhone}</div>
      <div>
        <a href={areaLink}>{areaLink} </a>
      </div>
    </div>
  </div>
)

export default AreaBlock
