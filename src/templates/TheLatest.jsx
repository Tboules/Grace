import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import TLate from "./theLatest.module.scss"
import Layout from "../components/Layout/Layout"

export const query = graphql`
  query($slug: String!) {
    contentfulTheLatestPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      thumbnailImage {
        file {
          url
        }
      }
      content {
        json
      }
    }
  }
`

const TheLatest = props => {
  console.log(props.data.contentfulTheLatestPost)
  const data = props.data.contentfulTheLatestPost
  return (
    <Layout>
      <div className={TLate.cont}>
        <div className={TLate.header}>
          <img src={data.thumbnailImage.file.url} alt="thumbnail" />
          <div className={TLate.textCont}>
            <h1>{data.title}</h1>
            <p>{data.publishDate}</p>
          </div>
        </div>
        <div className={TLate.body}>
          {documentToReactComponents(data.content.json)}
        </div>
      </div>
    </Layout>
  )
}

export default TheLatest
