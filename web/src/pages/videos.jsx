import React, { useState, useEffect } from "react"
//import PropTypes from "prop-types"
//import { graphql } from "gatsby"
import Layout from "../components/Layout"
// import ExternalReferences from "../components/ExternalReferences"
// import StatBlock from "../components/StatBlock"
import videosHero from "../assets/videos-hero.jpg"
import theme from "../styles/theme"

const VideosPage = () => (
  //const [YTVideos, setYTVideos] = useState(testData)
  // useEffect(() => {

  // }, [YTVideos])
/*
  const loadData = async () => {
    const response = await fetch(
      "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLFszJqZtLxVnHCxHlnTHU468qPA1hHNRa&key=AIzaSyCbaV62f8OKSaU8hURXHixccwL4Vg7-Fe8"
    )
    const data = await response.json()
    setYTVideos(data)
  }
  loadData()*/
  
  

    
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
/*
// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== "undefined"
export default function MyComponent() {
  let loggedIn = false
  if (isBrowser) {
    window.localstorage.getItem("isLoggedIn") === "true"
  }
      window.onload = () => {
        let apiUrl =
          "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLFszJqZtLxVnHCxHlnTHU468qPA1hHNRa&key=AIzaSyCbaV62f8OKSaU8hURXHixccwL4Vg7-Fe8";

        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            console.log(data.items);
            data.items.forEach((item) => {
              createVideoElement(item.snippet.resourceId.videoId);
            });
          })
          .catch((err) => {
            alert(err);
          });
      };

      function createVideoElement(videoId) {
        let appendTarget = document.getElementById("target");
        let container = document.createElement("div");
        let frame = document.createElement("iframe");

        container.className = "video";
        frame.src = `https://www.youtube.com/embed/${videoId}`;
        frame.width = 560;
        frame.height = 315;
        frame.frameborder = 0;
        frame.allowFullscreen = true;

        container.append(frame);
        target.append(container);
      }
};

/* COPYPASTE FROM HERE TO NEXT COMMENT TO ADD A NEW VIDEO }
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
        { TO HERE */