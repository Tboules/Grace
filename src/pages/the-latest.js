import React from "react"
import Layout from "../components/Layout/Layout"
import Banner from "../components/Banner/Banner"
import { graphql, useStaticQuery, Link } from "gatsby"
import Blue from "../vectors/blue.svg"
import LP from "./latest.module.scss"

const TheLatest = () => {
  const theLatestQ = useStaticQuery(graphql`
    {
      allContentfulTheLatestPost(sort: { fields: publishDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishDate(formatString: "MMMM Do, YYYY")
            thumbnailImage {
              file {
                url
              }
            }
          }
        }
      }
      contentfulBanner(title: { eq: "The Latest" }) {
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
    }
  `)

  const banner = theLatestQ.contentfulBanner

  const posts = theLatestQ.allContentfulTheLatestPost.edges.map(edge => {
    return (
      <li key={edge.node.publishDate}>
        <Link className={LP.listItem} to={`${edge.node.slug}`}>
          <img
            src={edge.node.thumbnailImage.file.url}
            alt={`Thumbnail for ${edge.node.title}`}
          />
          <div className={LP.listText}>
            <h2>{edge.node.title}</h2>
            <p>{edge.node.publishDate}</p>
          </div>
        </Link>
      </li>
    )
  })

  return (
    <Layout>
      <Banner info={banner} vec={Blue} />
      <ol className={LP.listCont}>{posts}</ol>
    </Layout>
  )
}

export default TheLatest
