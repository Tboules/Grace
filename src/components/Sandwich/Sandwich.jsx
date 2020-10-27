import React from "react"
import Sand from "./sandwich.module.scss"

const Sandwich = ({ id, info }) => {
  return (
    <div id={id} className={Sand.cont}>
      <h1>About Us</h1>
      <div className={Sand.multiCont}>
        <div className={Sand.picOne}>
          <img src={info.pic1} alt="" />
        </div>
        <div className={Sand.info}>
          <p>{info.des}</p>
        </div>
        <div className={Sand.picTwo}>
          <img src={info.pic2} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Sandwich
