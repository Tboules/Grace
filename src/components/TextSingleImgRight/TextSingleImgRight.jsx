import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import TSR from "./textSingleImgRight.module.scss"

const TextSingleImgRight = ({ info, id }) => {
  return (
    <div id={id} className={TSR.cont}>
      <h1>{info.title}</h1>
      <div className={TSR.contentCont}>
        <img className={TSR.img} src={info.sectionImages[0].file.url} alt="" />
        <div className={TSR.textCont}>
          {documentToReactComponents(info.sectionDescriptionOne.json)}
        </div>
      </div>
    </div>
  )
}

export default TextSingleImgRight
