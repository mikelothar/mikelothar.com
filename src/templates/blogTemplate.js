import React from 'react'
import Title from '../components/Title/Title'
import Navbar from '../components/Navbar'

export default function Template({
                                   data, // this prop will be injected by the GraphQL query below.
                                 }) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="has-background-dark">
      <section className="hero is-dark is-large bg-parent">
        <div className="bg-fixed"/>

        <Navbar/>

        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="section">
              <div className="columns is-mobile is-centered">
                <div className="column is-two-thirds-tablet is-half-desktop">

                  <p className="title">
                    {frontmatter.title}
                  </p>
                  <p className="subtitle"
                     dangerouslySetInnerHTML={{ __html: frontmatter.subtitle }}/>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>


      <div className="container">
        <div className="section">


          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>


    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        subtitle
        img
        color
      }
    }
  }
`