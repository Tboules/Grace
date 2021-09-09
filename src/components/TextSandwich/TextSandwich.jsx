import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import TextS from "./textSandwich.module.scss"

const TextSandwich = ({ id, info }) => {
  return (
    <div id={id} className={TextS.cont}>
      <h1>{info.title}</h1>
      <div className={TextS.contentCont}>
        <div className={TextS.textCont}>
          {documentToReactComponents(info.sectionDescriptionOne.json)}
        </div>
        <div className={TextS.imgCont}>
          <img
            className={TextS.img}
            src={info?.sectionImages ? info?.sectionImages[0]?.file.url : ""}
            alt=""
          />
        </div>
        <div className={TextS.textCont}>
          {documentToReactComponents(info.sectionDescriptionTwo.json)}
        </div>
      </div>
    </div>
  )
}

export default TextSandwich
