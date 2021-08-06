import React from "react"
import theme from "../styles/theme"

const StatBlock = ({ statNumber, statText }) => (
  <div
    css={{
      border: "2px solid white",
      width: "40%",
      height: "9rem",
      textAlign: "center",
      margin: "0.5rem",
    }}
  >
    <div
      css={{
        paddingTop: "1rem",
        color: theme.white,
        fontSize: "3.75rem",
        lineHeight: 1,
      }}
    >
      {statNumber}
      <div
        css={{
          textTransform: "uppercase",
          color: theme.white,
          fontWeight: 300,
          fontSize: "1rem",
          padding: "0 0.5rem",
        }}
      >
        {statText}
      </div>
    </div>
  </div>
)

export default StatBlock
