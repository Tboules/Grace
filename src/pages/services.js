import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql, useStaticQuery } from "gatsby"
import Banner from "../components/Banner/Banner"
import orange from "../vectors/Orange.svg"
import SectionHero from "../components/SectionHero/SectionHero"
import TitleCardInfo from "../components/TitleCardInfo/TitleCardInfo"
import Serve from "../components/TitleCardInfo/Serve.module.scss"
import TextSandwich from "../components/TextSandwich/TextSandwich"
import TextSingleImgRight from "../components/TextSingleImgRight/TextSingleImgRight"
import BigCards from "../components/BigCards/BigCards"
import DonationServices from "../components/DonationServices/DonationServices"

const Services = () => {
  const servicesInfo = useStaticQuery(graphql`
    {
      allContentfulServicesPage {
        edges {
          node {
            slug
            theImmigrantsJourney {
              id
              sectionImages {
                file {
                  url
                }
                title
              }
              sectionDescriptionOne {
                json
              }
            }
            settlement {
              sectionImages {
                file {
                  url
                }
              }
              sectionDescriptionOne {
                json
              }
              serviceOrderNumber
              title
            }
            englishEducation {
              sectionDescriptionOne {
                json
              }
              sectionDescriptionTwo {
                json
              }
              sectionImages {
                file {
                  url
                }
              }
              title
              serviceOrderNumber
            }
            financialEducation {
              sectionDescriptionOne {
                json
              }
              sectionImages {
                file {
                  url
                }
              }
              serviceOrderNumber
              title
            }
            workforceDevelopment {
              sectionCards {
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
              title
              serviceOrderNumber
            }
            targetingPainPoints {
              sectionDescriptionOne {
                json
              }
              title
              serviceOrderNumber
              sectionDescriptionTwo {
                json
              }
              sectionImages {
                file {
                  url
                }
              }
            }
            givingBack {
              title
              serviceOrderNumber
              sectionDescriptionOne {
                json
              }
              sectionImages {
                file {
                  url
                }
              }
            }
            servicesBanner {
              title
              image {
                file {
                  url
                }
              }
              description {
                description
              }
            }
          }
        }
      }
    }
  `)

  const data = servicesInfo.allContentfulServicesPage.edges[0].node

  const settlementData = {
    title: data.settlement.title,
    pics: data.settlement.sectionImages.map(url => url.file.url),
    des: data.settlement.sectionDescriptionOne.json,
  }

  return (
    <Layout>
      <Banner info={data.servicesBanner} vec={orange} />
      <SectionHero
        info={data.theImmigrantsJourney}
        id="the-immigrants-journey"
      />
      <TitleCardInfo
        id="settlement"
        info={settlementData}
        title={settlementData.title}
        styleName={Serve}
      />
      <TextSandwich info={data.englishEducation} id="english-education" />
      <TextSingleImgRight
        info={data.financialEducation}
        id="financial-education"
      />
      <BigCards
        id="workforce-development"
        info={data.workforceDevelopment}
        cards={data.workforceDevelopment.sectionCards}
      />
      <TextSandwich
        id="targeting-pain-points"
        info={data.targetingPainPoints}
      />
      <DonationServices id="donation-services" info={data.givingBack} />
    </Layout>
  )
}

export default Services
