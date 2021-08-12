import React, { useState, useEffect } from "react"
//import PropTypes from "prop-types"
//import { graphql } from "gatsby"
import Layout from "../components/Layout"
// import ExternalReferences from "../components/ExternalReferences"
// import StatBlock from "../components/StatBlock"
import videosHero from "../assets/videos-hero.jpg"
import theme from "../styles/theme"

const VideosPage = () => {
  const [YTVideos, setYTVideos] = useState([])
  useEffect(() => {
    loadData()
  },[])
  const loadData = async () => {
    console.log("data loading")
    const response = await fetch(
      "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLFszJqZtLxVnHCxHlnTHU468qPA1hHNRa&key=AIzaSyCbaV62f8OKSaU8hURXHixccwL4Vg7-Fe8"
    )
    const data = await response.json()
    setYTVideos(data)
  }

  return (
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

      <div
        id="target"
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
        {YTVideos.items.map(video => {
          return (
            <div
              css={{
                padding: "0.5rem",
                marginBottom: "0.5rem",
                [theme.mobile]: {
                  padding: 0,
                },
              }}
              key={video.snippet.resourceId.videoId}
            >
              <iframe
                src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
                css={{
                  width: "100%",
                  height: "16rem",
                  border: "none",
                }}
              ></iframe>
              <h3
                css={{
                  paddingTop: "0.5rem",
                  fontSize: 14,
                  fontStyle: "italic",
                }}
              >
                {video.snippet.title}
              </h3>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default VideosPage
