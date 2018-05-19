import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Bg = styled.figure `
  background: no-repeat center center;
  background-size: cover;
  background-image: url(${props => props.bg
  ? require('../../../assets/animated-bg/' + props.bg)
  : require('../../../assets/animated-bg/cat-typing.gif')});
`

const PostLink = ({post}) => (
  <div
    className="column is-mobile is-half-tablet is-half-desktop is-one-third-widescreen is-one-third-fullhd">
    <Link to={post.frontmatter.path}>
      <div className="card">
        <div className="card-image">
          <Bg bg={post.frontmatter.bg} className="image is-5by3"/>
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