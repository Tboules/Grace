import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import logo from "../../images/grace-mobile-logo.png"
import H from "./header.module.scss"
import { Collapse } from "@chakra-ui/core"
import { useMediaQuery } from "react-responsive"
import PageNav from "../PageNav/PageNav"

const Header = () => {
  const [show, setShow] = useState(true)
  const handleToggle = () => setShow(!show)
  const [about, setAbout] = useState(false)
  const [services, setServices] = useState(false)

  const servicesIds = [
    "settlement",
    "english-education",
    "financial-education",
    "workforce-development",
    "targeting-pain-points",
    "donation-services",
  ]
  const aboutIds = ["mission", "about-us", "vision", "why-we-do-it", "history"]

  const isLargeScreen = useMediaQuery({ query: "(min-width: 1200px)" })

  useEffect(() => {
    if (!isLargeScreen) {
      setShow(false)
    } else {
      setShow(true)
    }
  }, [isLargeScreen, setShow])

  return (
    <div className={H.container}>
      <div className={H.logoHam}>
        <Link to="/">
          <img alt="logo" src={logo} />
        </Link>
        <div onClick={handleToggle} className={H.burger}>
          <div className={H.line1}></div>
          <div className={H.line2}></div>
          <div className={H.line3}></div>
        </div>
      </div>
      <nav className={H.nav}>
        <Collapse mt={0} isOpen={show}>
          <ul>
            <li
              onMouseEnter={() => setAbout(true)}
              onMouseLeave={() => setAbout(false)}
            >
              <Link to="/about-us">About Us</Link>
              <Collapse isOpen={about}>
                <PageNav slug="about-us" links={aboutIds} />
              </Collapse>
            </li>
            <li
              onMouseEnter={() => setServices(true)}
              onMouseLeave={() => setServices(false)}
            >
              <Link to="/services">Services</Link>
              <Collapse isOpen={services}>
                <PageNav slug="services" links={servicesIds} />
              </Collapse>
            </li>
            <li>
              <Link to="/get-involved">Get Involved</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </Collapse>
      </nav>
      <div className={H.butt}>
        <Link to="/donation">
          <button type="button">Donate</button>
        </Link>
      </div>
    </div>
  )
}

export default Header
