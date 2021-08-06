import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ExternalReferences from "../components/ExternalReferences"
import StatBlock from "../components/StatBlock"
import aboutHero from "../assets/about-hero.jpg"
import theme from "../styles/theme"
import LogoBwnc from "../assets/about-page/logo-BWNC.jpg"
import LogoNatGeo from "../assets/about-page/logo-natgeo.jpg"
import LogoPLT from "../assets/about-page/logo-plt.jpg"
import LogoSmith from "../assets/about-page/logo-smithsonian.jpg"
import LogoWwf from "../assets/about-page/logo-wwf.jpg"

const AboutPage = () => (
  <Layout title="Billy B About Page">
    <img
      src={aboutHero}
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
        backgroundColor: theme.mediumGreen,
        height: "7rem",
        color: theme.white,
      }}
    >
      <h3
        css={{
          paddingTop: "2rem",
          paddingBottom: "2rem",
          fontSize: "2.25rem",
          lineHeight: "2.5rem",
          textAlign: "center",
          verticalAlign: "middle",
          alignContent: "center",
          fontWeight: 400,
          color: theme.white,
        }}
      >
        Trusted Educational Experience
      </h3>
    </div>

    <div>
      <div
        css={{
          backgroundColor: theme.darkBlue,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: "1rem",
          alignContent: "center",
          justifyItems: "center",
          paddingTop: "2rem",
          [theme.mobile]: {
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: "0.5rem",
          },
        }}
      >
        <StatBlock statNumber="40+" statText="Years Performing" />
        <StatBlock statNumber="51" statText="States &amp; Territories" />
        <StatBlock statNumber="9" statText="Original Albums" />
        <StatBlock statNumber="2+" statText="Million Students" />
      </div>
    </div>

    <div
      css={{
        backgroundColor: theme.darkBlue,
        paddingTop: "3rem",
        paddingBottom: "3rem",
        background:
          "linear-gradient(0deg, #007B8C 0%, rgba(0, 148, 171, 0) 4rem)",
      }}
    >
      <div
        css={{
          width: "83.333333%",
          margin: "0 auto",
          paddingBottom: "4rem",
          color: theme.white,
          lineHeight: "1.75rem",
          fontWeight: 300,
          fontStyle: "italic",
        }}
      >
        <p>
          Billy is a dynamic songwriter and performer who has been commissioned
          to create stage shows, produce albums of original music, and star in
          video projects for prominent environmental organizations such as the
          National Geographic Society, The World Wildlife Fund, Project Learning
          Tree, The Cleveland Museum of Natural History, Baltimore Woods Nature
          Center and the France and Merrick Foundations. He has performed on big
          stages such as The Wolf Trap Filene Center, The Kennedy Center
          Eisenhower Hall, Center Stage Central Park NYC, and performed in other
          notable venues such as the White House, 92nd Street Y, Smithsonian,
          MSC OPAS at Texas A&amp;M, Oakland Museum of California, the Sanger
          Theater of Mobile and many others.
        </p>
        <p>
          His performances have taken him to 48 states and three Provinces in
          Canada where he has keynoted hundreds of conferences, festivals and
          thousands of schools. Billy B.’s lively song, dance and stories have
          both educated and entertained educators, children, and even two
          American Presidents. He has released 9 albums of original music, most
          of which involve original songs about the ecosystems and critters on
          our beautiful planet.
        </p>
        <p>
          His two newest shows are “Weather, Climate, Let’s Define It”, and “The
          Salish Sea With Billy B”. During the recent ‘Covid Times’ he performed
          72 virtual shows using the “Green Screen” platform, which allowed him
          to stand in front of, and interact with, the ecosystems and critters
          that were the subject of his songs.
        </p>
        <p>
          He now lives in “The Great Northwest”, Port Townsend Washington, where
          he scuba dives and continues to create and perform, in person and
          virtually.
        </p>
      </div>
    </div>

    {/* websites */}
    <ExternalReferences
      title="World Wildlife Foundation"
      image={LogoWwf}
      date="Since 1989"
      details="Commissioned a recording of songs for ” Biodiversity and Billy B
      ,“ and to act in videos, all of which ended up being part of their
      “Biodiversity 911″ project, a traveling exhibition by WWF. A live
      show was also commissioned ”Bio, Bio, Biodiversity,“ which Billy
      has now performed hundreds of times all over the country."
    />
    <ExternalReferences
      title="National Geographic"
      image={LogoNatGeo}
      date="Since 1992"
      details="Multiple performances at The National Geographic Headquarters in
      Washington DC. Original song commisioned for “BioBlitz”; recorded,
      produced, and performed live twice for National Geographic."
    />
    <ExternalReferences
      title="Smithsonian"
      image={LogoSmith}
      date="Since 1984"
      details="Performed at The National Zoo, The American Art Museum, The Natural
      History Museum, The Folklife Festival, and The Discovery Theater."
    />
    <ExternalReferences
      title="Project Learning Tree"
      image={LogoPLT}
      date=" Since 1995"
      details="Performed for PLT at many national conferences and regional
      workshops. Three award winning recordings and a video compilation
      have also been released."
    />
  </Layout>
)

export default AboutPage
