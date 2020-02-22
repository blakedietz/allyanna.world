import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header className={`my-8 w-full h-7 flex flex-row `}>
    <div className={`flex flex-col w-full`}>
      <div className={`mb-8`}>
        <Link
          to="/"
          id="home-link"
        >
          {siteTitle}
        </Link>
      </div>
      <div className={`flex flex-row flex-wrap`}>
        <div className={`mr-2`}>
          <Link
            to="/services"
          >
            AW.Click
          </Link>
        </div>
        <div className={`mr-2`}>
          {"//"}
        </div>
        <div className={`mr-2`}>
          <Link
            to="/blog-posts"
          >
            Blog
          </Link>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
