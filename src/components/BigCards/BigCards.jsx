import React from "react"
import BC from "./bigCards.module.scss"

const BigCards = ({ id, info, cards }) => {
  return (
    <div id={id} className={BC.cont}>
      <h1>{info.title}</h1>
      <div className={BC.cardCont}>
        {cards.map(card => {
          return (
            <div key={card.image.file.url} className={BC.card}>
              <div className={BC.imgCont}>
                <img src={card.image.file.url} alt="card pic" />
              </div>
              <h1>{card.title}</h1>
              <p>{card.description.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BigCards
