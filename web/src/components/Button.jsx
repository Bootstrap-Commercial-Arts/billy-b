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
      padding: "0.75rem 3rem",
      borderStyle: "none",
      fontSize: "1.5rem",
      textDecoration: "none",
      boxShadow: "0 3px 4px rgb(0 0 0 / 20%)",
      [theme.mobile]: {
        backgroundColor: mobileBackgroundColor,
      },
    }}
  >
    {children}
  </button>
)

export default Button
