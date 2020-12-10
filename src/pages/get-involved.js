import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql, useStaticQuery } from "gatsby"
import greenVec from "../vectors/Green.svg"
import Banner from "../components/Banner/Banner"
import GetInvolvedLayout from "../components/GetInvolvedLayout/GetInvolvedLayout"
import BoxFifty from "../components/BoxFifty/BoxFifty"
import Email from "../components/Email/Email"

const GetInvolved = () => {
  const GIInfo = useStaticQuery(graphql`
    {
      allContentfulGetInvolvedPage {
        edges {
          node {
            slug
            getInvolvedBanner {
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
            joinOurMailingList {
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
            becomeAPeerMentor {
              title
              description {
                description
              }
              callToAction
              image {
                file {
                  url
                }
              }
            }
            volunteer {
              title
              description {
                description
              }
              callToAction
              image {
                file {
                  url
                }
              }
            }
            intern {
              title
              description {
                description
              }
              callToAction
              image {
                file {
                  url
                }
              }
            }
          }
        }
      }
    }
  `)
  const data = GIInfo.allContentfulGetInvolvedPage.edges[0].node

  return (
    <Layout>
      <Banner info={data.getInvolvedBanner} vec={greenVec} />
      <GetInvolvedLayout>
        <BoxFifty
          id="join-our-mailing-list"
          info={data.joinOurMailingList}
          input={true}
          button={true}
          order={0}
        />
        <BoxFifty
          id="become-a-peer-mentor"
          info={data.becomeAPeerMentor}
          button={true}
          order={0}
        />
        <BoxFifty
          id="volunteer"
          info={data.volunteer}
          button={true}
          order={1}
        />
        <BoxFifty id="intern" info={data.intern} button={true} order={1} />
      </GetInvolvedLayout>
      <Email id="interested" title="Interested in Getting Involved?" />
    </Layout>
  )
}

export default GetInvolved
