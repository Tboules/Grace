import React from "react"
import PN from "./pageNav.module.scss"
import { toTitleCase } from "../../utils"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const PageNav = ({ slug, links }) => {
  return (
    <nav className={PN.nav}>
      <ul>
        {links.map(link => {
          const newLink = toTitleCase(link)
          return (
            <AnchorLink
              className={PN.item}
              to={`/${slug}#${link}`}
              title={newLink}
              key={link}
            >
              <li>{newLink}</li>
            </AnchorLink>
          )
        })}
      </ul>
    </nav>
  )
}

export default PageNav
