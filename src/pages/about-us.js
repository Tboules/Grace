import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Banner from "../components/Banner/Banner"
import Layout from "../components/Layout/Layout"
import Sandwich from "../components/Sandwich/Sandwich"
import TitleCardInfo from "../components/TitleCardInfo/TitleCardInfo"
import TextImageRight from "../components/TextImageRight/TextImageRight"
import PageNav from "../components/PageNav/PageNav"

//vectors
import blue from "../vectors/blue.svg"
import yellow from "../vectors/Yellow.svg"

const aboutIds = ["mission", "about-us", "vision", "why-we-do-it", "history"]

const AboutUs = () => {
  const aboutUs = useStaticQuery(graphql`
    {
      allContentfulAboutUsPage {
        edges {
          node {
            slug
            missionBanner {
              title
              description {
                description
              }
              image {
                file {
                  url
                }
              }
            }
            aboutUsDescription {
              aboutUsDescription
            }
            aboutUsPhotos {
              file {
                url
              }
            }
            visionBanner {
              title
              description {
                description
              }
              image {
                file {
                  url
                }
              }
            }
            whyPhotos {
              file {
                url
              }
            }
            whyDescription {
              whyDescription
            }
            historyPhotos {
              file {
                url
              }
            }
            historyDescription {
              json
            }
          }
        }
      }
    }
  `)

  const data = aboutUs.allContentfulAboutUsPage.edges[0].node

  const aboutInfo = {
    des: data.aboutUsDescription.aboutUsDescription,
    pic1: data.aboutUsPhotos[0].file.url,
    pic2: data.aboutUsPhotos[1].file.url,
  }

  const whyInfo = {
    des: data.whyDescription.whyDescription,
    pics: data.whyPhotos.map(pic => pic.file.url),
  }

  const historyInfo = {
    des: data.historyDescription.json,
    pics: data.historyPhotos.map(pic => pic.file.url),
  }

  // export const aboutSlug = data.slug

  return (
    <Layout>
      <Banner id="mission" info={data.missionBanner} vec={blue} />
      <Sandwich id="about-us" info={aboutInfo} />
      <Banner id="vision" info={data.visionBanner} vec={yellow} />
      <TitleCardInfo id="why-we-do-it" info={whyInfo} title="Why We Do It" />
      <TextImageRight id="history" info={historyInfo} title="History" />
    </Layout>
  )
}

export default AboutUs
