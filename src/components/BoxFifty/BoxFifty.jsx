import React, { useState } from "react"
import BF from "./boxFifty.module.scss"

const BoxFifty = ({ info, id, button, input, order }) => {
  const [emailInput, SetEmailInput] = useState(input)
  const [butt, setButt] = useState(button)
  const [email, setEmail] = useState(null)
  console.log(email)
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
          />
        )}
        <div>
          {butt && (
            <button>{info.callToAction ? info.callToAction : "Join!"}</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default BoxFifty
