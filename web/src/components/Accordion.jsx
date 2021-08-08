import React, { useState } from "react"
import "../components/accordion.css"
import chev from "../assets/right-chevron.png"


export default props => {
  const { title } = props
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  //

  return (
    <div className="accordion">
      <div className="accordion-title" onClick={toggle}>
        <span>{title}</span>
        <img
          className="toggle"
          src={chev}
          aria-expanded={isOpen}
          alt="Toggle Accordion"
        />
      </div>
      <div className="accordion-content" aria-expanded={!isOpen}>
        {props.children}
      </div>
    </div>
  )
}
