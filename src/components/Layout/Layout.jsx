import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import L from "./layout.module.scss"
import "../../styles/index.scss"

const Layout = props => (
  <div className={L.container}>
    <div className={L.content}>
      <Header />
      {props.children}
    </div>
    <Footer />
  </div>
)

export default Layout
