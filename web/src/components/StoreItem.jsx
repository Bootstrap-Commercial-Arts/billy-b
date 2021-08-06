import React from "react"
import theme from "../styles/theme"

const StoreItem = ({ image, name, price }) => (
  <div
    css={{
      backgroundColor: theme.darkBlue,
      marginTop: "2rem",
      marginBottom: "1rem",
    }}
  >
    <div css={{ paddingLeft: "1rem" }}>
      <div>
        <img
          src={image || "https://via.placeholder.com/200"}
          alt=""
          css={{
            width: 200,
            [theme.mobile]: {
              width: "90%",
            },
          }}
        />
      </div>
      <div css={{ paddingTop: "0.5rem", fontWeight: 500, color: theme.white }}>
        {name}
      </div>
      <div css={{ paddingTop: "0.5rem", fontWeight: 500, color: theme.white }}>
        ${price}
      </div>
    </div>
  </div>
)

export default StoreItem
