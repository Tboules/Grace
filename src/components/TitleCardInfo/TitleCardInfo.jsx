import React from "react"
import TCI from "./tci.module.scss"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const TitleCardInfo = ({ id, info, title, styleName }) => {
  const styleType = styleName ? styleName : TCI
  return (
    <div id={id} className={styleType.cont}>
      <h1>{title}</h1>
      <div className={styleType.picCont}>
        {info.pics.map(imgUrl => (
          <img key={imgUrl} src={imgUrl} alt="photos" />
        ))}
      </div>
      {typeof info.des === "string" ? (
        <p>{info.des}</p>
      ) : (
        documentToReactComponents(info.des)
      )}
    </div>
  )
}

export default TitleCardInfo
