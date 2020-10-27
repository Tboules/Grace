import React from "react"
import SHero from "./sectionHero.module.scss"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const SectionHero = ({ id, info }) => {
  return (
    <div id={id} className={SHero.cont}>
      <h1>Immigration with Grace</h1>
      <div className={SHero.picText}>
        <img src={info.sectionImages[0].file.url} alt="" />
        <div className={SHero.textCont}>
          {documentToReactComponents(info.sectionDescriptionOne.json)}
        </div>
      </div>
    </div>
  )
}

export default SectionHero
