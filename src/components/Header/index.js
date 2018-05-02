import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../../../assets/mikelothar-logo.svg'

const SiteHeader = styled.nav`
  font-size: 14px;
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: saturate(180%) blur(20px);
  margin: 0;
  padding: .5rem 0;
  position: sticky;
  top: 0;
  z-index: 1020;

  a:first-child {
    margin-left: -1rem;
  }

  a {
    transition: ease-in-out color 0.15s;
    padding: 1rem;
    text-decoration: none;
    color: #aaa;
  }
  
  a:hover,
  a.active {
    color: #fff;
  }

  img {
    margin-top: .25rem;
    height: 28px;
  }
`

const StyledLink = styled(Link)`

`

const Header = () => (
  <SiteHeader>
    <div className="main">
      {/*<Link exact to="/">*/}
      {/*<img src={logo} alt="Mike Lothar"/>*/}
      {/*</Link>*/}
      <StyledLink exact to="/" activeClassName="active">Home</StyledLink>
      <StyledLink to="/development" activeClassName="active">Development</StyledLink>
      <StyledLink to="/graphics" activeClassName="active">Graphics</StyledLink>
    </div>
  </SiteHeader>
)

export default Header
