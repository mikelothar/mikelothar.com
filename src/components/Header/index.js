import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../../../assets/mikelothar-logo.svg'

const SiteHeader = styled.nav`
  font-size: 14px;
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: saturate(180%) blur(20px);

  a {
    color: #fff;
    transition: ease-in-out color 0.15s;
  }
  
  a:hover,
  a.active {
    color: #aaa;
    text-decoration: none;
  }

  img {
    margin-top: .25rem;
    height: 28px;
  }
`;

const StyledLink = styled(Link)`

`;

const Header = () => (
  <SiteHeader className="site-header sticky-top py-1">
    <div className="container d-flex flex-column flex-md-row">
      <Link exact to="/" className="d-md-inline-block">
        <img src={logo} alt="Mike Lothar"/>
      </Link>
      <StyledLink to="/development" activeClassName="active"
                  className="py-2 ml-5 d-none d-md-inline-block">Development</StyledLink>
      <StyledLink to="/graphics" activeClassName="active"
                  className="py-2 ml-5 d-none d-md-inline-block">Graphics</StyledLink>
    </div>
  </SiteHeader>
);

export default Header
