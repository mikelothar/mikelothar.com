import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"
import logo from '../../../assets/mikelothar-logo.svg'

const SiteHeader = styled.nav`
  background-color: #272828;
  backdrop-filter: saturate(180%) blur(20px);
  
  & .container {
    max-width: 960px;
  }
  
  & a {
    color: #999;  
    transition: ease-in-out color 0.15s;
    
    &.active,
    &:hover {
      color: #fff;
      text-decoration: none;
    }
  }
  
  img {
    height: 50px;
  }
`;

const Header = () => (
  <SiteHeader className="site-header sticky-top py-1">
    <div className="container d-flex flex-column flex-md-row justify-content-between">
      <Link to="/" className="py-2">
        <img src={logo} alt="" />
      </Link>
      <Link to="/" className="py-2 d-none d-md-inline-block active">Development</Link>
      <Link className="py-2 d-none d-md-inline-block" href="#">Graphics</Link>
      <a className="py-2 d-none d-md-inline-block" href="#">Layouts</a>
      <a className="py-2 d-none d-md-inline-block" href="#">Games</a>
      <a className="py-2 d-none d-md-inline-block" href="#">About</a>
    </div>
  </SiteHeader>
)

export default Header
