/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Banner from "./banner"
import Footer from "./footer"

import Header from "./header"
import HeroImage from "./heroImage"
import "./layout.css"
import Skills from "./skills"

const Layout = () => {

  return (
    <>
      <Banner />
      <Header />
      <HeroImage />
      <Skills />
      <Footer />
    </>
  )
}

export default Layout
