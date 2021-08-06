import React from "react"
import { Link } from "gatsby"
import theme from "../styles/theme"

const FooterBooker = () => (
  <div
    css={{
      backgroundColor: theme.lightBlue,
      color: theme.black,
    }}
  >
    <div
      css={{
        width: "75%",
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        fontSize: "1.5rem",
        paddingTop: "1.5rem",
      }}
    >
      To book Billy B simply fill out our booking form to get directly in touch
      with a booking agent!
    </div>
    <div
      css={{
        textAlign: "center",
        marginTop: "1rem",
      }}
    >
      <button
        css={{
          backgroundColor: theme.darkBlue,
          color: theme.white,
          marginLeft: "auto",
          marginRight: "auto",
          padding: "0.25rem 3rem",
          borderRadius: 9999,
          borderColor: theme.mediumBlue,
          borderStyle: "none",
          fontSize: "1.5rem",
        }}
      >
        <Link
          to="/booking-form/"
          css={{ textDecoration: "none", color: theme.white }}
        >
          Book Billy B.
        </Link>
      </button>
    </div>
  </div>
)

export default FooterBooker
