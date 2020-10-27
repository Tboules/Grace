import React from "react"
import DH from "./donationHome.module.scss"

const DonationHome = ({ donationInfo }) => (
  <div
    style={{ backgroundImage: `url(${donationInfo.image})` }}
    className={DH.cont}
  >
    <div className={DH.textCont}>
      <h3>{donationInfo.text}</h3>
      <button>Donate</button>
    </div>
  </div>
)

export default DonationHome
