import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import TSR from "./textSingleImgRight.module.scss"

const TextSingleImgRight = ({ info }) => {
  console.log(info)
  return (
    <div className={TSR.cont}>
      <h1>{info.title}</h1>
    </div>
  )
}

export default TextSingleImgRight
