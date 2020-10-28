import React from "react"
import ContactLayout from "../components/ContactLayout/ContactLayout"
import Email from "../components/Email/Email"
import Layout from "../components/Layout/Layout"

const Contact = () => {
  return (
    <Layout>
      <ContactLayout>
        <Email title="Contact Us" />
      </ContactLayout>
    </Layout>
  )
}

export default Contact
