import React from 'react'
import PostLink from '../components/PostLink'
import Navbar from '../components/Navbar'

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  const Posts = edges
  .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
  .map(edge => <PostLink key={edge.node.id} post={edge.node}/>)
  return (
    <div className="has-background-light">


      <section className="hero is-danger is-fullheight bg-parent">
        <div className="bg-fixed"/>

        <Navbar/>

        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="section">
              <div className="columns is-mobile is-centered">
                <div className="column is-two-thirds-tablet is-half-desktop">
                  
              <p className="title">
                Day 983 of My Captivity
              </p>
              <p className="subtitle">
                I am convinced the other captives are flunkies and maybe snitches. The dog is routinely released and seems more than happy to return. He is obviously a half-wit. The Bird on the other hand has got to be an informant. He has mastered their frightful tongue. (something akin to mole speak) and speaks with them regularly. I am certain he reports my every move. Due to his current placement in the metal room his safety is assured. But I can wait, it is only a matter of time...
              </p>
            </div>
              </div>
            </div>
          </div>
        </div>

      </section>


      <div className="container has-text-centered">
        <div className="section">
          <div className="columns is-multiline">
            {Posts}
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            bg
          }
        }
      }
    }
  }
`