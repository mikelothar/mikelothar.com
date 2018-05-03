import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../../../assets/mikelothar-logo.svg'

const SiteHeader = styled.nav`
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: saturate(180%) blur(20px);
  position: sticky;
  top: 0;
  z-index: 1020;
  padding: .75rem 0;
  
  .main {
  }

  a:first-child {
    //margin-left: -1rem;
  }

  a {
    transition: ease-in-out color 0.15s, border-bottom-color 0.15s;
    padding: .5rem .15rem;
    text-decoration: none;
    color: rgba(0, 0, 0, .54);
    border-bottom: 2px solid transparent;
    margin: 0 1.5rem 0 0;
  }
  
  a:hover,
  a.active {
    color: rgba(0, 0, 0, .87);
    border-bottom: 2px solid black;
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
      <div className="twelve center">
      {/*<Link exact to="/">*/}
      {/*<img src={logo} alt="Mike Lothar"/>*/}
      {/*</Link>*/}
      <StyledLink exact to="/" activeClassName="active">Home</StyledLink>
      <StyledLink to="/development" activeClassName="active">Development</StyledLink>
      <StyledLink to="/graphics" activeClassName="active">Graphics</StyledLink>
    </div>
    </div>
  </SiteHeader>
)

export default Header
