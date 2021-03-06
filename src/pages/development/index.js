import React from "react";
import PostLink from "../../components/PostLink";

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  const Posts = edges
  .filter(edge => !!edge.node.frontmatter.path.startsWith('/development/'))
  .map(edge => <PostLink key={edge.node.id} post={edge.node}/>);

  return <div>{Posts}</div>;
};

export default IndexPage;

export const pageQuery = graphql`
  query DevelopmentQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;