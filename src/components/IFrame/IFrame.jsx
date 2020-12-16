import React from "react"
import IF from "./iframe.module.scss"

const IFrame = ({ url }) => {
  return (
    <div className={IF.cont}>
      <iframe src={url} className={IF.frame} />
    </div>
  )
}

export default IFrame
