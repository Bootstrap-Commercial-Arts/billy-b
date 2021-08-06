import React from "react"
import theme from "../styles/theme"

const Button = ({
  backgroundColor,
  textColor,
  mobileBackgroundColor,
  children,
}) => (
  <button
    css={{
      backgroundColor: backgroundColor,
      marginLeft: "auto",
      marginRight: "auto",
      borderRadius: 9999,
      color: textColor,
      padding: "0.25rem 3rem",
      borderStyle: "none",
      fontSize: "1.5rem",
      textDecoration: "none",
      [theme.mobile]: {
        backgroundColor: mobileBackgroundColor,
      },
    }}
  >
    {children}
  </button>
)

export default Button
