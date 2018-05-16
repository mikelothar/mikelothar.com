import React from 'react'
import Link from 'gatsby-link'

const PostLink = ({ post }) => (
  <div className="column is-mobile is-half-tablet is-half-desktop is-one-third-widescreen is-one-third-fullhd">
    <Link to={post.frontmatter.path}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-5by3">
            {post.frontmatter.img ?
              <img src={require('../../../assets/posts/' + post.frontmatter.img)} alt=""/> : ''}
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-4">{post.frontmatter.title}</p>
          <p className="subtitle is-6">{post.frontmatter.date}</p>
        </div>
      </div>
    </Link>
  </div>
)

export default PostLink