import React, { useRef } from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import contactHero from "../assets/contact-hero.jpg"
import theme from "../styles/theme"

const ContactPage = () => {
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
  return (
    <Layout title="Billy B Contact Page">
      <img
        src={contactHero}
        width="max-content"
        css={{
          position: "relative",
          objectFit: "cover",
          display: "block",
          maxWidth: "100%",
        }}
      />
      <div>
        <div>
          <p
            css={{
              width: "83.333333%",
              margin: "2rem auto",
              paddingBottom: "1.5rem",
              color: theme.white,
              lineHeight: "1.75rem",
              fontWeight: 300,
              fontStyle: "italic",
            }}
          >
            Billy loves to hear from children & educators, and reads every
            message sent to him. Have a question or comment you'd like
            to send him? Use the convenient & secure contact form. If you're
            inquiring about booking a virtual or in-person performance, please
            use the{" "}
            <Link to="/booking-form" css={{ color: theme.lightYellow }}>
              booking form
            </Link>
          </p>
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
            name="contact-form"
            method="POST"
            data-netlify="true"
            action="/thank-you"
            data-netlify-honeypot="bot-field"
            // onSubmit={handleSubmit}
            css={{
              width: "83.333333%",
              margin: "3rem auto 0",
              // paddingBottom: "3rem",
            }}
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact-form" />
            <div css={{ margin: "2rem 0" }}>
              <input
                type="name"
                id="name"
                name="name"
                // ref={node => (name = node)}
                placeholder="Your Name"
                required
                css={{ width: "99%", height: "2rem" }}
              />
            </div>
            <div css={{ margin: "2rem 0" }}>
              <input
                type="email"
                id="email"
                name="email"
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
                name="message"
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
                display: "grid",
                gridTemplateColumns: "1fr",
                justifyItems: "end",
              }}
            >
              {/* <FileUploader /> */}
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
      </div>
    </Layout>
  )
}
export default ContactPage

const FileUploader = props => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null)

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = event => {
    hiddenFileInput.current.click()
  }
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = event => {
    const fileUploaded = event.target.files[0]
    props.handleFile(fileUploaded)
  }
  return (
    <>
      <button
        onClick={handleClick}
        css={{
          padding: "1rem 1rem",
          width: "12rem",
          borderRadius: 9999,
          borderColor: theme.mediumBlue,
          borderStyle: "none",
          textTransform: "uppercase",
          backgroundColor: theme.mediumBlue,
          color: theme.black,
          textAlign: "center",
          fontWeight: 700,
          alignItems: "flex-end",
        }}
      >
        Attach File
      </button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </>
  )
}
