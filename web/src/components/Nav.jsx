import React, { useState } from "react"
import { Link } from "gatsby"
import theme from "../styles/theme"
import HamburgerIcon from "../components/ui/HamburgerIcon"

const Nav = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)
  return (
    <div
      css={{
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center",
        [theme.mobile]: {
          marginRight: "auto",
          marginLeft: "auto",
        },
      }}
    >
    {open && <SmallNav />}
      <button
        onClick={toggle}
        css={{
          border: "none",
          padding: "0.5rem 0 0 0",
          backgroundColor: theme.darkBlue,
        }}
      >
        <HamburgerIcon
          open={open}
          css={{
            width: 75,
            backgroundColor: theme.darkBlue,
            "@media (min-width: 681px)": {
              display: "none",
            },
          }}
        />
        
      </button>
      <div
        css={{
          alignItems: "center",
        }}
      >
        <ul
          css={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
            gap: "1rem",
            justifyItems: "center",
            margin: 0,
            padding: 0,
            fontSize: "2rem",
            listStyle: "none",
            textTransform: "uppercase",
            
            li: {
              paddingLeft: "auto",
              paddingRight: "auto",
            },
            a: {
              textDecoration: "none",
              color: theme.black,
              fontWeight: "100",
            },
            "a:hover": {
              color: theme.mediumYellow,
            },
            
            [theme.mobile]: {
              display: "none",
            },
          }}
        >
          <li>
            <Link
              to="/"
              css={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about/"
              css={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/albums/"
              css={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}
            >
              Albums
            </Link>
          </li>
          <li>
            <Link
              to="/show/"
              css={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}
            >
              Shows
            </Link>
          </li>
          <li>
            <Link
              to="/contact/"
              css={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav

const SmallNav = () => (
  <ul
    css={{
      display: "grid",
      alignContent: "space-between",
      gridTemplateRows: "auto",
      backgroundColor: theme.darkBlue,
      alignContent: "center",
      justifyItems: "center",
      margin: 0,
      padding: "0.5rem",
      fontSize: "2.5rem",
      fontWeight: 700,
      listStyle: "none",
      textTransform: "uppercase",
      position: "fixed",
      top: "0",
      left: "0",
      zIndex: "1000",
      width: "100vw",
      height: "100vh",
      li: {
        paddingLeft: "auto",
        paddingRight: "auto",
        marginBottom: "2.25rem",
        color: theme.white,
      },
      a: {
        textDecoration: "none",
        color: theme.white,
      },
      "@media (min-width: 681px)": {
        display: "none",
      },
    }}
  >
    <li>
    <button
        onClick={toggle}
        css={{
          border: "none",
          padding: "0.5rem 0 0 0",
          backgroundColor: theme.darkBlue,
        }}
      >
        <HamburgerIcon
          close={open}
          css={{
            margin: "0 auto",
          }}
        />
        
      </button>
    </li>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about/">About</Link>
    </li>
    <li>
      <Link to="/albums/">Albums</Link>
    </li>
    <li>
      <Link to="/show/">Shows</Link>
    </li>
    <li>
      <Link to="/contact/">Contact</Link>
    </li>
  </ul>
)
