import React from "react"
import GIL from "./getInvolvedLayout.module.scss"
import "../../styles/index.scss"

const GetInvolvedLayout = ({ children }) => (
  <div className={GIL.container}>{children}</div>
)

export default GetInvolvedLayout
