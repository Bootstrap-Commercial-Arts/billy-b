import React, { useState } from "react"
import { Link } from "gatsby"
// import Logo from "../assets/logo.png"
import Nav from "../components/Nav"
import theme from "../styles/theme"

import storeIconDesktop from "../assets/store-icon-desktop.svg"
import storeIconMobile from "../assets/store-icon-mobile.svg"
import videosIconDesktop from "../assets/videos-icon-desktop.svg"
import videosIconMobile from "../assets/videos-icon-mobile.svg"

const Header = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)

  return (
    <>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "1fr 6fr",
          backgroundColor: theme.darkBlue,
          [theme.mobile]: {
            gridTemplateColumns: "1fr 3fr",
          },
        }}
      >
        <div
          css={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: "0.5rem 0.5rem 0 0",
            width: "100%",
            height: "100%",
            [theme.mobile]: {
              padding: 0,
            },
          }}
        >
          <Link to="/">
            <img
              src="../assets/logo.png"
              css={{
                width: 180,
                height: 180,
                [theme.mobile]: {
                  width: 75,
                  height: 75,
                },
              }}
            />
          </Link>
        </div>
        <div
          css={{
            display: "grid",
            gridTemplateRows: "1fr 1fr",
            backgroundColor: theme.darkBlue,
            [theme.mobile]: {
              gridTemplateRows: "none",
              gridTemplateColumns: "2fr 1fr",
            },
          }}
        >
          <div
            css={{
              display: "grid",
              // paddingLeft: "1rem",
              // paddingRight: "1rem",
              order: 1,
              background:
                "linear-gradient(90deg, #007B8C 0%, rgba(0, 148, 171, 0) 4rem)",
              [theme.mobile]: {
                order: 2,
                background: "none",
                padding: 0,
              },
            }}
          >
            <Nav />
          </div>

          <div
            css={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              backgroundColor: theme.lightBlue,
              justifyItems: "center",
              order: 2,
              [theme.mobile]: {
                order: 1,
                paddingTop: "1.25rem",
                paddingBottom: "1.25rem",
              },
            }}
          >
            <div>
              <Link to="/videos/">
                <img
                  src={videosIconMobile}
                  css={{
                    height: 70,
                    width: 102,
                    "@media (min-width: 681px)": {
                      display: "none",
                    },
                  }}
                />
              </Link>
              <Link to="/videos/">
                <img
                  src={videosIconDesktop}
                  css={{
                    height: 100,
                    width: 170,
                    "@media (max-width: 680px)": {
                      display: "none",
                    },
                  }}
                />
              </Link>
            </div>
            <div>
              <Link to="/store/">
                <img
                  src={storeIconDesktop}
                  css={{
                    height: 100,
                    width: 170,
                    "@media (max-width: 680px)": {
                      display: "none",
                    },
                  }}
                />
              </Link>
              <Link to="/store/">
                <img
                  src={storeIconMobile}
                  css={{
                    height: 70,
                    width: 102,
                    "@media (min-width: 681px)": {
                      display: "none",
                    },
                  }}
                />
              </Link>
            </div>
          </div>
        </div>

        <div
          css={{
            background: theme.darkBlue,
            flex: 1,
          }}
        ></div>
      </div>
    </>
  )
}

export default Header
