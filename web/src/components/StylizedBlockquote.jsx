import React from "react"

const StylizedBlockquote = ({ children }) => (
  <blockquote
    css={{
      fontFamily: "Mali, 'Comic Sans', sans-serif",
      fontSize: "2.25rem",
      textTransform: "uppercase",
      textAlign: "center",
      color: "#007B8C",
    }}
  >
    <span
      css={{
        position: "relative",
        zIndex: 2,
        ":before, :after": {
          content: "''",
          background:
            "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MSIgaGVpZ2h0PSI0MiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0U2RTdFOCIgZD0iTTE1Ljc3IDE2LjA5YzAgMy43IDcuNzMgNC4zMSA3LjczIDEzLjQ0IDAgNi43Mi00LjgyIDExLjczLTExLjU0IDExLjczQzQuNzQgNDEuMjYuMDIgMzQuODQuMDIgMjguMDIuMDIgMTYuMyAxMS4wNi43NCAxNy44OC43NGMxLjcgMCA0LjgxIDEuMiA0LjgxIDMuMzEgMCAyLjEtNi45MiA1LjcyLTYuOTIgMTIuMDR6bTI3LjI5IDBjMCAzLjcgNy43MiA0LjMxIDcuNzIgMTMuNDQgMCA2LjcyLTQuODEgMTEuNzMtMTEuNTQgMTEuNzMtNy4yMiAwLTExLjkzLTYuNDItMTEuOTMtMTMuMjRDMjcuMyAxNi4zIDM4LjM0Ljc0IDQ1LjE2Ljc0YzEuNyAwIDQuODIgMS4yIDQuODIgMy4zMSAwIDIuMS02LjkyIDUuNzItNi45MiAxMi4wNHoiLz48L3N2Zz4=')",
          display: "block",
          width: 51,
          height: 42,
          position: "absolute",
          zIndex: -1,
        },
        ":before": {
          top: -12,
          left: -10,
        },
        ":after": {
          transform: "rotateX(180deg) rotateY(180deg)",
          right: -15,
          bottom: -8,
        },
      }}
    >
      {children}
    </span>
  </blockquote>
)

export default StylizedBlockquote
