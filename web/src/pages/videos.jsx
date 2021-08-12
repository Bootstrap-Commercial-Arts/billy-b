import React, { useState, useEffect } from "react"
//import PropTypes from "prop-types"
//import { graphql } from "gatsby"
import Layout from "../components/Layout"
// import ExternalReferences from "../components/ExternalReferences"
// import StatBlock from "../components/StatBlock"
import videosHero from "../assets/videos-hero.jpg"
import theme from "../styles/theme"
import React from "react";
import {Helmet} from "react-helmet";

class Application extends React.Component {
  render () {
    return (
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <script src="" type="text/javascript" />
            </Helmet>
        </div>
    );
  }
};

const VideosPage = () => (
  
  

    
    <Layout title="Billy B Videos Page">
      <img
        src={videosHero}
        width="max-content"
        css={{
          position: "relative",
          objectFit: "cover",
          display: "block",
          maxWidth: "100%",
        }}
      />

      <div id="target"
        css={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          margin: "2rem",
          [theme.mobile]: {
            display: "block",
            marginRight: 0,
            marginLeft: 0,
          },
        }}
      >


        
        

        
      </div>
      
    </Layout>
  )


export default VideosPage
