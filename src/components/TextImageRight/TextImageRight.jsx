import React from "react"
import TIR from "./tir.module.scss"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import MediaQuery from "react-responsive"
import ImageCarousel from "../ImageCarousel/ImageCarousel"

const TextImageRight = ({ id, info, title }) => {
  return (
    <div id={id} className={TIR.cont}>
      <h1>{title}</h1>
      <div className={TIR.infoCont}>
        <div>{documentToReactComponents(info.des)}</div>
        <MediaQuery minWidth={1400}>
          <div className={TIR.picCont}>
            {info.pics.map(url => (
              <img key={url} src={url} alt="photos" />
            ))}
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={1399}>
          <ImageCarousel images={info.pics.map(url => url)} width="390px" />
        </MediaQuery>
      </div>
    </div>
  )
}

export default TextImageRight
