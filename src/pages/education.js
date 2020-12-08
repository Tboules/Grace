import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Banner from "../components/Banner/Banner"
import YouTube from "../components/YouTube/YouTube"
import Layout from "../components/Layout/Layout"

import yellow from "../vectors/Yellow.svg"

const Education = () => {
  const edQuery = useStaticQuery(graphql`
    {
      allContentfulEducationPage {
        edges {
          node {
            title
            slug
            educationBanner {
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
            videoSections {
              title
              link1
              link2
              link3
            }
          }
        }
      }
    }
  `)

  const data = edQuery.allContentfulEducationPage.edges[0].node

  console.log(data)

  return (
    <Layout>
      <Banner id="education" info={data.educationBanner} vec={yellow} />
      {data.videoSections.map(vid => (
        <YouTube info={vid} />
      ))}
    </Layout>
  )
}

export default Education
