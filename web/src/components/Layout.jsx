import React from "react"
import { Helmet } from "react-helmet"
import { Global } from "@emotion/core"
import theme, { globalStyles } from "../styles/theme"
import Header from "../components/Header"
import Footer from "../components/Footer"
import FooterBooker from "../components/FooterBooker"

const Layout = props => {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css2?family=Mali&amp;family=Roboto:wght@300;400;700&amp;display=swap"
        />
      </Helmet>
      <Global styles={globalStyles} />

      <div
        css={{
          backgroundColor: theme.mediumBlue,
          color: theme.white,
          padding: "2rem 3rem",
          [theme.mobile]: {
            padding: 0,
          },
        }}
      >
        <div
          css={{
            maxWidth: 980,
            margin: "0 auto",
          }}
        >
          <Header />

          <main
            css={{
              backgroundColor: theme.darkBlue,
              padding: "0 0 2rem",
              minHeight: "100vh",
            }}
          >
            {props.children}
          </main>
          <FooterBooker />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
