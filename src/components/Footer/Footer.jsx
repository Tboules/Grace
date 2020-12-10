import React from "react"
import whiteLogo from "../../images/White Logo.png"
import instaLogo from "../../images/Instagram_AppIcon_Aug2017.png"
import fbLogo from "../../images/f_logo_RGB-Blue_58.png"
import F from "./footer.module.scss"
import { mailChimp } from "../../utils"

const Footer = () => {
  const handleSubmit = e => {
    e.preventDefault()
    mailChimp(e.target.email.value)
    e.target.reset()
  }
  return (
    <div className={F.majorCont}>
      <div className={F.graceLogo}>
        <img src={whiteLogo} alt="white Grace Logo" />
      </div>
      <div className={F.about}>
        <h2>About Us</h2>
        <p>
          Grace is a 501(c)(3) nonprofit organization dedicated to providing
          transitional services for the Middle Eastern/North African (MENA)
          community in Southern California.
        </p>
      </div>
      <div className={F.contact}>
        <h2>Contact</h2>
        <p>
          18326 Ward Street
          <br /> Fountain Valley, CA, 92708
          <br /> (714)983-4370
        </p>
        <img src={instaLogo} alt="Instagram Logo" />
        <img src={fbLogo} alt="FaceBook Logo" />
      </div>
      <form onSubmit={handleSubmit} className={F.sub}>
        <h2>Subscribe</h2>
        <input
          className={F.email}
          name="email"
          type="submit/text"
          placeholder="Email"
        />
        <input type="submit" placeholder="Full Name" />
      </form>
    </div>
  )
}

export default Footer
