import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import YouTube from "react-youtube"
import Layout from "../components/Layout"
// import ExternalReferences from "../components/ExternalReferences"
// import StatBlock from "../components/StatBlock"
import videosHero from "../assets/videos-hero.jpg"
import theme from "../styles/theme"


const testData = {
  "kind": "youtube#playlistItemListResponse",
  "etag": "TxXgIN0NqJ1jI6eiQ_3MO7c2ge4",
  "nextPageToken": "CAUQAA",
  "items": [
    {
      "kind": "youtube#playlistItem",
      "etag": "OjJm9vBo3-0iaLdgjwUBf-QTMP0",
      "id": "UExGc3pKcVp0THhWbkhDeEhsblRIVTQ2OHFQQTFoSE5SYS41MzJCQjBCNDIyRkJDN0VD",
      "snippet": {
        "publishedAt": "2021-05-14T15:04:53Z",
        "channelId": "UCFu9Ewxi8CCwuxikTF3g3hw",
        "title": "Cicada Guitar Song & Dance 2021 and 2004",
        "description": "This is a re-edit of a song and dance that was done during the last Brood X Cicada emergence in the Washington DC area. New footage has been added, as well as my 2021 persona. I look older because I am.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/eloa910rolU/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/eloa910rolU/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/eloa910rolU/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/eloa910rolU/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/eloa910rolU/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Billy B Brennan",
        "playlistId": "PLFszJqZtLxVnHCxHlnTHU468qPA1hHNRa",
        "position": 0,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "eloa910rolU"
        },
        "videoOwnerChannelTitle": "Billy B Brennan",
        "videoOwnerChannelId": "UCFu9Ewxi8CCwuxikTF3g3hw"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "2ywfYumD_0QMWs75ZEYEpvPMG0w",
      "id": "UExGc3pKcVp0THhWbkhDeEhsblRIVTQ2OHFQQTFoSE5SYS41NkI0NEY2RDEwNTU3Q0M2",
      "snippet": {
        "publishedAt": "2021-05-11T22:02:06Z",
        "channelId": "UCFu9Ewxi8CCwuxikTF3g3hw",
        "title": "Talking About Worms Billy B with Owen, Aiden",
        "description": "Billy B sings his song \"Worms\" with Owen Dodrill on the keyboard.\nFilmed by the talented up and coming Director Aiden Dodrill",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/LRCZv-OhSLs/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/LRCZv-OhSLs/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/LRCZv-OhSLs/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/LRCZv-OhSLs/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/LRCZv-OhSLs/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Billy B Brennan",
        "playlistId": "PLFszJqZtLxVnHCxHlnTHU468qPA1hHNRa",
        "position": 1,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "LRCZv-OhSLs"
        },
        "videoOwnerChannelTitle": "Billy B Brennan",
        "videoOwnerChannelId": "UCFu9Ewxi8CCwuxikTF3g3hw"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "S9PP2Y2pPr6eo63bvjTXTIVlmgA",
      "id": "UExGc3pKcVp0THhWbkhDeEhsblRIVTQ2OHFQQTFoSE5SYS4yODlGNEE0NkRGMEEzMEQy",
      "snippet": {
        "publishedAt": "2021-05-11T22:02:06Z",
        "channelId": "UCFu9Ewxi8CCwuxikTF3g3hw",
        "title": "One Trip Sun Around the Sun - The reason for seasons, if the sun was a basketball...",
        "description": "Uploaded on december 21, 2012 ( the end times, yuk,yuk ) \nGo to www.BILLYBPRODUCTIONS.com to see more Billy B videos. Billy sings ONE TRIP AROUND THE SUN, which is on his cd Sunup Sundown and can be purchase via itunes and the other internet sites. Here, Billy uses a basketball to demonstrate how little and how far away the earth is in relation to the sun. He also use an original chant \" Winter, Spring, Summer and Fall, it's the tilt that changes them all \" to explain why the seasons change. This is all based on routines Billy has been doing for years in schools all over the country.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/2-UlBozGj4g/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/2-UlBozGj4g/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/2-UlBozGj4g/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/2-UlBozGj4g/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/2-UlBozGj4g/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Billy B Brennan",
        "playlistId": "PLFszJqZtLxVnHCxHlnTHU468qPA1hHNRa",
        "position": 2,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "2-UlBozGj4g"
        },
        "videoOwnerChannelTitle": "Billy B Brennan",
        "videoOwnerChannelId": "UCFu9Ewxi8CCwuxikTF3g3hw"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "uVWVnFW1t3hyhu82HPPcG-S7A80",
      "id": "UExGc3pKcVp0THhWbkhDeEhsblRIVTQ2OHFQQTFoSE5SYS4wMTcyMDhGQUE4NTIzM0Y5",
      "snippet": {
        "publishedAt": "2021-05-11T22:02:06Z",
        "channelId": "UCFu9Ewxi8CCwuxikTF3g3hw",
        "title": "Billy B Brennan singing Crab Jubilee as Anoxia May and Mr. Crab.mov",
        "description": "Go to www.BILLYBPRODUCTIONS.com to see more Billy B videos. In full costume, Billy B Brennan becomes two different characters to explain the event called \"Crab Jubilee\" . As \"Anoxia May\" and \"Mr. Crab\" he has a musical conversation about the causes and effects of Crab Jubilee . This clip is an excerpt from \" It Happened Today From the Chesapeake Bay \".",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/U-cV3UFCSIQ/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/U-cV3UFCSIQ/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/U-cV3UFCSIQ/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Billy B Brennan",
        "playlistId": "PLFszJqZtLxVnHCxHlnTHU468qPA1hHNRa",
        "position": 3,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "U-cV3UFCSIQ"
        },
        "videoOwnerChannelTitle": "Billy B Brennan",
        "videoOwnerChannelId": "UCFu9Ewxi8CCwuxikTF3g3hw"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "1mQt4bhh6F53wdAt-xKsyDBZJ-Y",
      "id": "UExGc3pKcVp0THhWbkhDeEhsblRIVTQ2OHFQQTFoSE5SYS41MjE1MkI0OTQ2QzJGNzNG",
      "snippet": {
        "publishedAt": "2021-05-11T22:02:06Z",
        "channelId": "UCFu9Ewxi8CCwuxikTF3g3hw",
        "title": "Billy B sings \" Biodiversity\"  with facts from the World Wildlife Fund",
        "description": "Go to www.billybproductions.com for more billy b videos. The title song the of Biodiversity and Billy B cd is illustrated with footage ( a bit of it shot by Billy B  )  and facts supplied by the education department of the World Wildlife Fund.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/hIRysCjXSmc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/hIRysCjXSmc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/hIRysCjXSmc/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Billy B Brennan",
        "playlistId": "PLFszJqZtLxVnHCxHlnTHU468qPA1hHNRa",
        "position": 4,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "hIRysCjXSmc"
        },
        "videoOwnerChannelTitle": "Billy B Brennan",
        "videoOwnerChannelId": "UCFu9Ewxi8CCwuxikTF3g3hw"
      }
    }
  ],
  "pageInfo": {
    "totalResults": 7,
    "resultsPerPage": 5
  }
}


const VideosPage = () => {


  const [YTVideos, setYTVideos] = useState(testData)
  useEffect(() => {
    loadData()
  }, [YTVideos])

  const loadData = async () => {
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
        {/* COPYPASTE FROM HERE TO NEXT COMMENT TO ADD A NEW VIDEO */}
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
        {/* TO HERE */}


      </div>
    </Layout>
  )
}

export default VideosPage
