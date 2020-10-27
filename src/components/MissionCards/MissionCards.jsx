import React from "react"
import MC from "./missionCards.module.scss"

const MissionCards = ({ cardsQ }) => {
  return (
    <div>
      <h1 className={MC.title}>Mission</h1>
      <div className={MC.cont}>
        {cardsQ.map(card => {
          return (
            <div className={MC.cardCont} key={card.title}>
              <h2>{card.title}</h2>
              <img src={card.image.file.url} alt={card.title} />
              <p>{card.description.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MissionCards
