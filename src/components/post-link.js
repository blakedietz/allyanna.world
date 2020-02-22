import React from "react"
import { Link } from "gatsby"
import { getFormattedDate } from "../utils/utils"

const PostLink = ({ post }) => {
  console.log(post)
  return (
    <div className={`mb-10`}>
      <Link to={post.frontmatter.path} >
        <div>
          <h2>
            {post.frontmatter.title}
          </h2>
          <div className={`ml-2`}>
            <div>
              {post.frontmatter.description}
            </div>
            <div className={`text-xs`}>
              {getFormattedDate((new Date(post.frontmatter.date)))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PostLink