import React from "react"
import IF from "./iframe.module.scss"

const IFrame = ({ url }) => {
  return (
    <div>
      <iframe src={url} className={IF.frame} />
    </div>
  )
}

export default IFrame
