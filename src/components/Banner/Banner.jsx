import React from "react"
import Ban from "./banner.module.scss"
import test from "../../images/silas-baisch-K785Da4A_JA-unsplash.jpg"

const Banner = ({ id, info, vec }) => {
  return (
    <div
      id={id}
      className={Ban.cont}
      style={{ backgroundImage: `url(${info.image.file.url})` }}
    >
      <div className={Ban.info} style={{ backgroundImage: `url(${vec})` }}>
        <h1>{info.title}</h1>
        <p>{info.description.description}</p>
      </div>
    </div>
  )
}

export default Banner
