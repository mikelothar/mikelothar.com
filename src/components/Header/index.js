import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
// import logo from '../../../assets/mikelothar-logo.svg'
import logo from '../../../assets/m.svg'

const SiteHeader = styled.nav`
  font-family: Montserrat, "Helvetica Neue", sans-serif;
  font-weight: 600;
  font-size: 0.6875rem;
  letter-spacing: 1.1px;
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: saturate(180%) blur(20px);
  position: sticky;
  top: 0;
  z-index: 1020;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  
  .ten {
    padding: 1.5rem 0;
    text-align: right;
  }

  img {
    margin-top: 1.1rem;
    height: 28.125px;
  }
`

const StyledLink = styled(Link)`
    transition: ease-in-out color 0.15s, border-bottom-color 0.15s;
    padding: 1.5rem .5rem;
    text-decoration: none;
    color: rgba(0, 0, 0, .54);
    border-bottom: 2px solid transparent;
    margin: 0 1.5rem 0 0;
    
    &:last-child {
      margin: 0;
    }
    
    &:hover,
    &.active {
      color: rgba(0, 0, 0, .75);
      border-bottom: 4px solid rgba(0, 0, 0, .87);
    }
`

const Header = () => (
  <SiteHeader>
    <div className="main">
      <div className="two">
        <Link exact to="/">
          <img src={logo} alt="Mike Lothar"/>
        </Link>
      </div>
      <div className="ten">
        <StyledLink to="/development" activeClassName="active">Development</StyledLink>
        <StyledLink to="/graphics" activeClassName="active">Graphics</StyledLink>
      </div>
    </div>
  </SiteHeader>
)

export default Header
