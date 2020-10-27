import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import DS from "./donationServices.module.scss"

const DonationServices = ({ id, info }) => {
  return (
    <div
      id={id}
      style={{ backgroundImage: `url(${info.sectionImages[0].file.url})` }}
      className={DS.cont}
    >
      <h1>{info.title}</h1>
      <div className={DS.textCont}>
        {documentToReactComponents(info.sectionDescriptionOne.json)}
      </div>
    </div>
  )
}

export default DonationServices
