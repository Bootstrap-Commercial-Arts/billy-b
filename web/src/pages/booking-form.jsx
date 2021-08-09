import React from "react"
import theme from "../styles/theme"
import bookingHero from "../assets/booking-hero.png"
import AreaBlock from "../components/AreaBlock"
import Layout from "../components/Layout"
const handleSubmit = event => {
  event.preventDefault()
  return window.open(
    `mailto:billybsings@gmail.com?subject=${encodeURIComponent(
      `Contact from ${event.target.name.value} Billy-b.com`
    )}&body=${encodeURIComponent(
      `From: ${event.target.name.value}\n\nEmail: ${event.target.email.value}\n\nMessage: ${event.target.message.value}`
    )}`,
    "_blank"
  )
}
const BookingPage = () => (
  <Layout title="Billy B Booking Page">
    <img
      src={bookingHero}
      width="max-content"
      css={{
        position: "relative",
        objectFit: "cover",
        display: "block",
        maxWidth: "100%",
      }}
    />
    <div css={{ paddingBottom: "2.5rem" }}>
      <div
        css={{
          width: "83.333333%",
          margin: "2rem auto",
          paddingBottom: "1.5rem",
          color: theme.white,
          lineHeight: "2rem",
          fontWeight: 300,
          fontStyle: "italic",
          fontSize: "1.75rem",
        }}
      >
        Select your area to contact the designated booking agent using the
        booking form below. Or, give them a call to discuss bringing Billy B to
        your school or event!
      </div>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gridGap: "1rem",
          width: "90%",
          alignContent: "center",
          margin: "0.5rem auto",
          [theme.mobile]: {
            display: "block",
          },
        }}
      >
        <AreaBlock
          areaHeader="The DC Area"
          areaTitle="Artivate"
          areaPhone="Phone: 301-588-7525"
          areaLink="https://www.goartivate.org"
        />
        <AreaBlock
          areaHeader="Connecticut Area"
          areaTitle="Arts for Learning Connecticut"
          areaPhone="Phone: 203-230-8101"
          areaLink="https://www.aflct.org"
        />
        <AreaBlock
          areaHeader="Massachusets Area"
          areaTitle="Young Audiences of Massachusets"
          areaPhone="Phone: 617-629-9262"
          areaLink="https://yamass.org"
        />
        <AreaBlock
          areaHeader="All Other Locations"
          areaTitle="Susan M. Schultz"
          areaPhone="Phone: 317-319-0609"
        />
      </div>
    </div>
    <div
      css={{
        backgroundColor: theme.darkBlue,
        paddingTop: "1rem",
        // paddingBottom: "3rem",
        background:
          "linear-gradient(180deg, #007B8C 0%, rgba(0, 148, 171, 0) 2rem)",
      }}
    >
      <form
        name="booking-form"
        method="POST"
        data-netlify="true"
        action="/thank-you"
        data-netlify-honeypot="bot-field"
        css={{
          width: "83.333333%",
          margin: "3rem auto 0",
          // paddingBottom: "3rem",
        }}
      >
        {/* onSubmit={handleSubmit} radio button can go here and you can add them to form data above */}
        {/* <div css={{ margin: "2rem 0" }}>
          <input type="radio" id="dc" css={{ height: "2rem" }} />
        </div> */}
        <div css={{ margin: "2rem 0" }}>
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="booking-form" />

          <input
            type="name"
            id="name"
            placeholder="Your Name"
            required
            css={{ width: "99%", height: "2rem" }}
          />
        </div>
        <div css={{ margin: "2rem 0" }}>
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            css={{ width: "99%", height: "2rem" }}
          />
        </div>
        <div css={{ margin: "2rem 0" }}>
          <textarea
            id="message"
            cols="30"
            placeholder="Message"
            rows="10"
            css={{
              width: "98.375%",
              color: theme.black,
              padding: 5,
            }}
          ></textarea>
        </div>

        <div
          css={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button
            type="submit"
            css={{
              padding: "1rem 1rem",
              width: "12rem",
              borderRadius: 9999,
              borderColor: theme.mediumBlue,
              borderStyle: "none",
              textTransform: "uppercase",
              backgroundColor: theme.lightYellow,
              color: theme.black,
              textAlign: "center",
              fontWeight: 700,
              alignItems: "flex-end",
            }}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  </Layout>
)

export default BookingPage
