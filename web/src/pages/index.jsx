import React from "react"
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import theme from "../styles/theme"
import HomePageBlockA from "../components/HomePageBlockA"
import HomePageBlockB from "../components/HomePageBlockB"
import StylizedBlockquote from "../components/StylizedBlockquote"
import ResumeThumb from "../assets/homepage/thumbnail-resume.jpg"
import VideosThumb from "../assets/homepage/thumbnail-videos.jpg"
import StoreThumb from "../assets/homepage/thumbnail-store.jpg"
import EducatorThumb from "../assets/homepage/thumbnail-lyrics.png"
import breakpoints from  "../styles/theme.js"

const Home = () => (
  <Layout title="Billy B Home Page">
    <div>
      <iframe
        src={`https://www.youtube.com/embed/JsGHW5BErEM`}
        css={{
          width: "100%",
          height: "500px",
          border: "none",
        }}
      ></iframe>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          [theme.mobile]: {
            display: "block",
          },
        }}
      >
        <div
          css={{
            // width: "91.666667%",
            margin: "0 auto",
            padding: "1.5rem",
            lineHeight: 1.181818,
            fontWeight: 300,
            
            // textAlign: "center",
            backgroundColor: theme.white,
            color: theme.black,
            gridColumn: "1/2",
          }}
        >
          <p css={{fontSize: "2.25rem ", [breakpoints.mobile]: {fontSize: "1.5rem",},}}>
            Since 1977 Bill Brennan (a.k.a. “Billy B.”) has electrified
            children, parents, and teachers alike with his exciting, unique
            style of combining environmental education and entertainment.
          </p>

          <p css={{fontSize: "2.25rem ", [breakpoints.mobile]: {fontSize: "1.5rem",},}}>
            Billy B., a trained educator turned performer, uses songs and dances
            which he writes and choreographs himself to teach children of all
            ages about the wonders of natural science, ecology and the
            environment. Kids have taught Billy they want to do two things; move
            and make noise. So Billy’s live shows and his recorded music all
            encourage audience participation.
          </p>

          <StylizedBlockquote>
            Educators call it kinetic learning. Kids call it fun.
          </StylizedBlockquote>

          <p css={{fontSize: "2.25rem ", [breakpoints.mobile]: {fontSize: "1.5rem",},}}>
            Billy B. has performed for more than 2 million children the United
            States and Canada, teaching children a large spectrum of
            environmental topics, from arthropods, alligators, and owls to
            complex scientific phenomena such as photosynthesis, pollination,
            the grinding of the earth’s tectonic plates, and erosion. In
            addition to teaching elementary and middle school children
            environmental science through song and dance, Billy B. also performs
            for primary and preschool students with both songs about nature and
            songs dealing with common courtesy, self help and life at school.
          </p>
        </div>
        <div
          css={{
            gridColumn: "2/3",
          }}
        >
          <HomePageBlockA
            header="Resume/About"
            details="Learn about Billy B's music and unique interaction with live
            performance backdrops that has earned him a stellar reputation in
            46 States and 3 Canadian Provinces. Find out why numerous
            scientific and educational organizations choose Billy B to educate
            and entertain children of all ages!"
            image={ResumeThumb}
            linkText="Read More"
            linkUrl="/about/"
            headerColor={theme.lightYellow}
            bodyColor={theme.darkYellow}
          />

          <HomePageBlockB
            header="Videos"
            details="Watch past shows, music videos, and other educational videos from
          Billy B's Youtube channel to get a taste of the songs, dances,
          theatrical backdrops and improv comedy he uses to reach and teach
          his audiences about the wonderful workings of our beautiful
          planet."
            image={VideosThumb}
            linkText="See More"
            linkUrl="/videos/"
            headerColor={theme.lightPink}
            bodyColor={theme.darkPink}
          />
          <HomePageBlockA
            header="Store"
            details="Find great gifts and mementos like tote bags, mugs, and shirts
            alongside CDs &amp; digital albums by Billy B. Or, become a
            patron at Billy B's Patreon page to earn merchandise, see
            exclusive content, &amp; give input on the shows that he is
            developing."
            image={StoreThumb}
            linkText="Start Shopping"
            linkUrl="/store/"
            headerColor={theme.lightGreen}
            bodyColor={theme.darkGreen}
          />
          <HomePageBlockB
            header="Educator Resources"
            details="Billy B creates each song with both kids &amp; educators in mind,
          which is why he's created helpful resources for teachers to use
          alongside his performances! Read, download, or print lyrics &amp;
          teacher guides for all of Billy B's work."
            image={EducatorThumb}
            linkText="Read More"
            linkUrl="/shows/"
            headerColor={theme.lightYellow}
            bodyColor={theme.darkYellow}
          />
        </div>
      </div>

      <div
        css={{
          backgroundColor: theme.darkBlue,
          paddingTop: "2rem",
          paddingBottom: "2rem",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
        }}
      >
        <p
          css={{
            marginRight: "auto",
            marginLeft: "auto",
            width: "75%",
            color: theme.white,
            fontSize: "1.125rem",
            textAlign: "center",
          }}
        >
          Have a question, comment, or drawing you want to share with Billy B?
          Use the contact form to reach out directly to him.
        </p>
        <div
          css={{
            textAlign: "center",
            marginTop: "1rem",
          }}
        >
          <button
            css={{
              backgroundColor: theme.lightBlue,
              // paddingRight: "2rem",
              // paddingLeft: "2rem",
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: 9999,
              color: theme.white,
              padding: "0.25rem 3rem",
              borderStyle: "none",
              fontSize: "1.5rem",
              textDecoration: "none",
            }}
          >
            Contact Billy B.
          </button>
        </div>
      </div>
    </div>
  </Layout>
)

export default Home
