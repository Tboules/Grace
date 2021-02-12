import React from "react"
import Layout from "../components/Layout/Layout"
import dnStyles from "./donation.module.scss"

const Donation = () => {
  const layoutRef = React.useRef()
  React.useEffect(() => {
    const ref = layoutRef
    const script = document.createElement("script")
    const donationButton = document.createElement("a")

    donationButton.class = "kindful-donate-btn"
    donationButton.id =
      "kindful-donate-btn-cbd3ade0-7042-4b04-a05d-da08a2ded763"

    script.src =
      "https://elevatedbygrace.kindful.com/embeds/cbd3ade0-7042-4b04-a05d-da08a2ded763/init.js"

    script.setAttribute("data-embed-id", "cbd3ade0-7042-4b04-a05d-da08a2ded763")
    script.setAttribute("data-lookup-type", "jquery-selector")
    script.setAttribute(
      "data-lookup-value",
      "#kindful-donate-btn-cbd3ade0-7042-4b04-a05d-da08a2ded763"
    )

    if (ref) {
      ref.current.appendChild(script)
      ref.current.appendChild(donationButton)
    }

    return () => {
      if (ref) {
        ref.current.removeChild(script)
        ref.current.removeChild(donationButton)
      }
    }
  }, [layoutRef])

  return (
    <Layout>
      <div id="helloTest" ref={layoutRef} className={dnStyles.cont}>
        <div className={dnStyles.top}>
          <h1>Cheerfully Give</h1>
        </div>
      </div>
    </Layout>
    //   <IFrame url="https://elevatedbygrace.kindful.com/" />
  )
}

export default Donation
