import React, { useState } from "react"
import BF from "./boxFifty.module.scss"
import { mailChimp } from "../../utils"

const BoxFifty = ({ info, id, button, input, order }) => {
  const [emailInput, SetEmailInput] = useState(input)
  const [butt, setButt] = useState(button)
  const [email, setEmail] = useState("")

  const handleJoin = () => {
    mailChimp(email)
    setEmail("")
  }

  return (
    <div id={id} className={BF.cont}>
      <img
        style={{ order: `${order}` }}
        src={info.image.file.url}
        alt="Mailing Envelopes"
      />
      <div className={BF.textCont}>
        <h1>{info.title}</h1>
        <p>{info.description.description}</p>
        {emailInput && (
          <input
            onChange={e => setEmail(e.target.value)}
            type="text"
            placeholder="email"
            value={email}
          />
        )}
        <div>
          {butt && info.callToAction ? (
            <a href="#interested">
              <button>{info.callToAction}</button>
            </a>
          ) : (
            <button onClick={handleJoin}>Join!</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default BoxFifty
