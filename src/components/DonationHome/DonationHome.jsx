import React from "react"
import DH from "./donationHome.module.scss"

const DonationHome = ({ donationInfo }) => (
  <div
    style={{ backgroundImage: `url(${donationInfo.image})` }}
    className={DH.cont}
  >
    <div className={DH.textCont}>
      <h3>{donationInfo.text}</h3>
      <a href="/donation">
        <button>Donate</button>
      </a>
    </div>
  </div>
)

export default DonationHome
