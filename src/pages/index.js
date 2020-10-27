import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import NewsAndEvents from "../components/NewsAndEvents/NewsAndEvents"
import MissionCards from "../components/MissionCards/MissionCards"
import Sponsers from "../components/Sponsers/Sponsers"
import Testimonial from "../components/Testimonial/Testimonial"
import DonationHome from "../components/DonationHome/DonationHome"

const Home = () => {
  const homePage = useStaticQuery(graphql`
    query {
      allContentfulHomePage {
        edges {
          node {
            slug
            heroSection {
              backgroundImage {
                file {
                  url
                }
              }
              description {
                description
              }
              slogan
            }
            newsAndEventText {
              newsAndEventText
            }
            newsAndEventImages {
              file {
                url
              }
            }
            missionCards {
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
            partnersAndFundersLogos {
              file {
                url
              }
            }
            testimonialImage {
              file {
                url
              }
            }
            testimonialText {
              testimonialText
            }
            testimonialNameAndLocation {
              json
            }
            donationBackgroundImage {
              file {
                url
              }
            }
            donationText {
              donationText
            }
          }
        }
      }
    }
  `)

  const queryData = homePage.allContentfulHomePage.edges[0].node

  const newsAndEvents = {
    NAEImages: queryData.newsAndEventImages.map(file => file.file.url),
    NAEText: queryData.newsAndEventText.newsAndEventText,
  }

  const testimonial = {
    text: queryData.testimonialText.testimonialText,
    image: queryData.testimonialImage.file.url,
    info: queryData.testimonialNameAndLocation.json,
  }

  const donation = {
    text: queryData.donationText.donationText,
    image: queryData.donationBackgroundImage.file.url,
  }

  return (
    <Layout>
      <Hero heroQ={queryData.heroSection} />
      <NewsAndEvents newsAndEventsQ={newsAndEvents} />
      <MissionCards cardsQ={queryData.missionCards} />
      <Sponsers sponserQ={queryData.partnersAndFundersLogos} />
      <Testimonial testimonialInfo={testimonial} />
      <DonationHome donationInfo={donation} />
    </Layout>
  )
}

export default Home
