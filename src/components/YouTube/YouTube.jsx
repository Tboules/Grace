import React from "react"
import YT from "./yt.module.scss"

const YouTube = ({ info }) => {
  const regex = /https:\/\/youtu.be/
  const linkArr = [
    info.link1.replace(regex, ""),
    info.link2.replace(regex, ""),
    info.link3.replace(regex, ""),
  ]

  console.log(linkArr)
  return (
    <div className={YT.cont}>
      <h2>{info.title}</h2>
      <div className={YT.vidCont}>
        {linkArr.map(vid => {
          return (
            <iframe
              className={YT.vid}
              src={`https://youtube.com/embed${vid}`}
              frameBorder="none"
              allowFullScreen
            ></iframe>
          )
        })}
      </div>
    </div>
  )
}

export default YouTube
