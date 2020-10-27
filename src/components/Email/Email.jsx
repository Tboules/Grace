import React, { useState } from "react"
import EM from "./email.module.scss"

const Email = () => {
  const [from, setFrom] = useState(null)
  const [subject, setSubject] = useState(null)
  const [body, setBody] = useState(null)

  console.log(from)
  console.log(subject)
  console.log(body)

  return (
    <div className={EM.cont}>
      <h1>Interested in Getting Involved?</h1>
      <h2>Shoot us an email</h2>
      <form action="" className={EM.form}>
        <div className={EM.inputCont}>
          <label for="from">From:</label>
          <input
            onChange={e => setFrom(e.target.value)}
            id="from"
            type="text"
            placeholder="Your Email"
          />
          <label for="subject">Subject:</label>
          <input
            onChange={e => setSubject(e.target.value)}
            id="subject"
            type="text"
            placeholder="Subject"
          />
          <label for="body">Body:</label>
          <textarea
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
