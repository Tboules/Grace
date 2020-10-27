import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Test from "./testimonial.module.scss"

const Testimonial = ({ testimonialInfo }) => (
  <div className={Test.cont}>
    <img src={testimonialInfo.image} alt="Sabah" />
    <div className={Test.textCont}>
      <p className={Test.text}>{testimonialInfo.text}</p>
      <div className={Test.info}>
        {documentToReactComponents(testimonialInfo.info)}
      </div>
    </div>
  </div>
)

export default Testimonial
