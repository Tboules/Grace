import React from "react"
import Sp from "./sponsers.module.scss"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/scss/alice-carousel.scss"

const responsive = {
  0: { items: 1 },
  650: { items: 1 },
  950: { items: 2 },
  1405: { items: 3 },
}

const Sponsers = ({ sponserQ }) => {
  return (
    <div className={Sp.cont}>
      <h1>Sponsers and Funders:</h1>
      <AliceCarousel
        className={Sp.imageCont}
        activeIndex={1}
        infinite={true}
        autoWidth={false}
        responsive={responsive}
        paddingLeft={0}
        autoPlay={true}
        autoPlayInterval={3000}
        disableDotsControls={true}
        disableButtonsControls={true}
        mouseTracking={true}
      >
        {sponserQ.map(icon => {
          return (
            <div key={icon.file.url} className={Sp.imgDiv}>
              <img
                className={Sp.img}
                draggable={false}
                src={icon.file.url}
                alt={icon.file.url}
              />
            </div>
          )
        })}
      </AliceCarousel>
    </div>
  )
}

export default Sponsers
