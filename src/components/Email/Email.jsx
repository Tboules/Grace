import React, { useState } from "react"
import EM from "./email.module.scss"

const Email = ({ title, id }) => {
  const [from, setFrom] = useState(null)
  const [subject, setSubject] = useState(null)
  const [body, setBody] = useState(null)

  // const form = useRef(null)

  const sendEmail = e => {
    e.preventDefault()
    const data = {
      from,
      subject,
      body,
    }

    fetch("/.netlify/functions/email", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(data => {
        console.log("success", data)
      })
      .catch(error => {
        console.error("error", error)
      })

    e.target.reset()
  }

  return (
    <div id={id} className={EM.cont}>
      <h1>{title}</h1>
      <h2>Shoot us an email</h2>
      <form onSubmit={sendEmail} action="" className={EM.form}>
        <div className={EM.inputCont}>
          <label htmlFor="from">From:</label>
          <input
            name="from"
            onChange={e => setFrom(e.target.value)}
            id="from"
            type="text"
            placeholder="Your Email"
          />
          <label htmlFor="subject">Subject:</label>
          <input
            name="subject"
            onChange={e => setSubject(e.target.value)}
            id="subject"
            type="text"
            placeholder="Subject"
          />
          <label htmlFor="body">Body:</label>
          <textarea
            name="body"
            className={EM.body}
            id="body"
            type="text"
            placeholder="Tell us about how you want to get involved... "
            onChange={e => setBody(e.target.value)}
          />
        </div>
        <button className={EM.butt}>Send!</button>
      </form>
    </div>
  )
}

export default Email
