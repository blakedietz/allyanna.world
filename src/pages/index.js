import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <Image/>
    <p>
      My name is Ally and I’m happy you’re here.
    </p>
    <p>
      I’m a lover of fashion, photography, food and hacks that make life simpler. Since 2001 I’ve had the pleasure of
      calling one of the most beautiful parts of the Pacific Northwest my home: Boise, Idaho.
      Sharing my ideas and thoughts beyond my bubble with the the world is new to me! But I’m taking a leap of faith
      here, folks. Stick around because I can’t wait to be vulnerable with you.
    </p>

    <span>
    You can also find me here:
    </span>
    <ul>
      <li>
        <a href="https://www.instagram.com/allyan_na/" target="_blank">
          @allyan_na
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/aw.click/" target="_blank">
          @aw.click
        </a>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
