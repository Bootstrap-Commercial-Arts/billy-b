import React from "react"
import theme from "../styles/theme"

const Footer = () => {
  return (
    <div
      css={{
        backgroundColor: theme.lightBlue,
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    >
      <div
        css={{
          textAlign: "center",
          marginTop: "1rem",
        }}
      >
        <div>
          <span>&#169;</span> 2016 Billy B Productions | Design and Development
          by 
          <a
          css={{
            textDecoration: "none",
            color: "#000000"
          }}
           href="https://www.bythebootstrap.us/">Bootstrap</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
