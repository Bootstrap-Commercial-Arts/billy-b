import React from "react"
// import PropTypes from "prop-types"
// import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Button from "../components/Button"
import storeHero from "../assets/store-hero.jpg"
import theme from "../styles/theme"
import StoreItem from "../components/StoreItem"
import placeholderCover from "../assets/album-art/ph-album-art.jpg"

const StorePage = () => (
  <Layout title="Billy B Store Page">
    <img
      src={storeHero}
      width="max-content"
      css={{
        position: "relative",
        objectFit: "cover",
        display: "block",
        maxWidth: "100%",
      }}
    />
    <div
      css={{
        display: "flex",
        margin: "0 auto",
        paddingTop: "2rem",
        paddingBottom: "2rem",
        textAlign: "center",
        verticalAlign: "middle",
        backgroundColor: theme.mediumGreen,
        [theme.mobile]: {
          display: "grid",
          gridTemplateRows: "1fr 1fr",
          rowGap: "2rem",
          textAlign: "center",
          justifyContent: "center",
          backgroundColor: theme.darkBlue,
        },
      }}
    >
      <Button
        backgroundColor={theme.lightGreen}
        textColor={theme.white}
        mobileBackgroundColor={theme.mediumBlue}
      >
        <a
          href="https://www.apple.com/itunes/"
          css={{ textDecoration: "none", color: theme.white }}
        >
          Billy B on Apple Music{" "}
        </a>
      </Button>
      <Button
        backgroundColor={theme.lightGreen}
        textColor={theme.white}
        mobileBackgroundColor={theme.mediumBlue}
      >
        <a
          href="https://patreon.com"
          css={{ textDecoration: "none", color: theme.white }}
        >
          Visit Billy B&apos;s Patreon
        </a>
      </Button>
    </div>
    <div
      css={{
        backgroundColor: theme.darkBlue,
        paddingTop: "1rem",
        background:
          "linear-gradient(180deg, #007B8C 0%, rgba(0, 148, 171, 0) 2rem)",
      }}
    >
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          margin: "2rem",
          "@media (max-width: 930px)": {
            gridTemplateColumns: "1fr 1fr 1fr",
          },
          [theme.mobile]: {
            gridTemplateColumns: "1fr 1fr",
            margin: 0,
          },
        }}
      >
        {/* ADD ADDITIONAL COMPONENTS TO ADD A NEW STORE ITEM */}
        <StoreItem
          image={placeholderCover}
          name="Product Name"
          price="14.95"
          css={{
            padding: "0.5rem",
            marginBottom: "0.5rem",
          }}
        />
        <StoreItem
          image={placeholderCover}
          name="Product Name"
          price="15.95"
          css={{
            padding: "0.5rem",
            marginBottom: "0.5rem",
          }}
        />
        <StoreItem
          image={placeholderCover}
          name="Product Name"
          price="16.95"
          css={{
            padding: "0.5rem",
            marginBottom: "0.5rem",
          }}
        />
        <StoreItem
          image={placeholderCover}
          name="Product Name"
          price="17.95"
          css={{
            padding: "0.5rem",
            marginBottom: "0.5rem",
          }}
        />
        <StoreItem
          image={placeholderCover}
          name="Product Name"
          price="18.95"
          css={{
            padding: "0.5rem",
            marginBottom: "0.5rem",
          }}
        />
        {/* ALL STOREITEM COMPONENTS ABOVE HERE */}
      </div>
    </div>
  </Layout>
)

export default StorePage
