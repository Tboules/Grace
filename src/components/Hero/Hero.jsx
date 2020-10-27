import React, { useEffect, useState } from "react"
import bigLogo from "../../images/elevated-logo-01.png"
import hero from "./hero.module.scss"

const Hero = ({ heroQ }) => {
  const [load, setLoad] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoad(true)
    }, 500)
  }, [setLoad])

  return (
    <div
      className={hero.cont}
      style={{ backgroundImage: `url(${heroQ.backgroundImage.file.url})` }}
    >
      <div className={[hero.textCont, load && hero.load].join(" ")}>
        <h1>{heroQ.slogan}</h1>
        <h3>{heroQ.description.description}</h3>
      </div>
      <div className={hero.imgCont}>
        <img src={bigLogo} alt="Grace Logo" />
      </div>
    </div>
  )
}

export default Hero
