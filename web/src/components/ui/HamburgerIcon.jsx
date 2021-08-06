import React from "react"
import theme from "../../styles/theme"

const HamburgerIcon = ({ open, ...props }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        css={{
          height: "3.5rem",
          width: "3.5rem",
          marginRight: 0,
          marginLeft: 0,
          verticalAlign: "top",
          // color: open ? theme.lightBlue : theme.white,
          color: theme.white,
          display: open ? "none" : "block",
          // transform: open ? "rotate(90deg)" : "none",
        }}
        viewBox="0 0 20 20"
        fill="currentColor"
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  )
}

export default HamburgerIcon
