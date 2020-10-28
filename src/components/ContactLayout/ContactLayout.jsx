import React from "react"
import CL from "./contactLayout.module.scss"
import "../../styles/index.scss"

const ContactLayout = ({ children }) => (
  <div className={CL.container}>{children}</div>
)

export default ContactLayout
